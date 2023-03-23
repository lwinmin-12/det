import { FilterQuery, UpdateQuery } from "mongoose";
import { permitDocument } from "../model/permit.model";
import { roleDocument } from "../model/role.model";
import userModel, { UserInput , UserDocument} from "../model/user.model";
import { compass , createToken} from "../utils/helper";

export const registerUser = async (payload : UserInput) => {
    try {
      let result = await userModel.create(payload)
      let userObj : Partial<UserDocument> = result.toObject()
      delete userObj.password
      return userObj
    }catch(e){
       throw new Error(e);
    }
}

export const loginUser = async ({email , password} : {email : string , password : string})=>{

    try {
        let user = await userModel.findOne({email}).populate({path : "roles permits"}).select("-__v")
   
       if(!user || !compass( password , user.password)){
           throw new Error("Creditial Error")
       }
   
        let userObj : Partial<UserDocument> = user.toObject()
        userObj['token'] = createToken(userObj)
   
        delete userObj.password
       
       return userObj
   
       }catch(e){
          throw new Error(e);   
       }

}

export const getUser = async (query :  FilterQuery<UserDocument>) =>{
    try{
     return await userModel.find(query).lean().populate({path : "roles permits userDevice"}).select("-password -__v")
    }catch(e){
     throw new Error(e);
    }
 }

 export const deleteUser = async (query :  FilterQuery<UserDocument>) =>{
    try{
     return await userModel.deleteMany(query)
    }catch(e){
     throw new Error(e);
    }
 }

 export const userAddRole = async (userId : UserDocument['_id'] , roleId : roleDocument['_id']) => {
    try {
     await userModel.findByIdAndUpdate( userId ,{$push : {roles : roleId}} )
     return await userModel.findById(userId)
    
    }catch (e : any){
     throw new Error(e)
    }
 }

 export const userRemoveRole = async (userId : UserDocument['_id'] , roleId : roleDocument['_id']) => {
    try {
     await userModel.findByIdAndUpdate( userId ,{$pull : {roles : roleId}} )
     return await userModel.findById(userId)
    }catch (e : any){
     throw new Error(e)
    }
 }

 export const userAddPermit = async (userId : UserDocument['_id'] , permitId : permitDocument['_id']) => {
   try {
    await userModel.findByIdAndUpdate( userId ,{$push : {permits : permitId}} )
    return await userModel.findById(userId)
   }catch (e : any){
    throw new Error(e)
   }
}

export const userRemovePermit = async (userId : UserDocument['_id'] , permitId : permitDocument['_id']) => {
   try {
    await userModel.findByIdAndUpdate( userId ,{$pull : {permits : permitId}} )
    return await userModel.findById(userId)
   }catch (e : any){
    throw new Error(e)
   }
}

export const userAddDevice = async (userId : FilterQuery<roleDocument> ,  deviceId : permitDocument["_id"]) =>{
   try{
       await userModel.findByIdAndUpdate(userId , {$push : {userDevice :  deviceId}})
       return userModel.findById(userId)
   }catch(e) {
       throw new Error (e)
   }
}

export const userRemoveDevice = async (userId : UserDocument['_id'] , deviceId : permitDocument['_id']) => {
   try {
      console.log(userId , deviceId)
    await userModel.findByIdAndUpdate( userId ,{$pull : {userDevice : deviceId}} )
    return await userModel.findById(userId)
   }catch (e : any){
    throw new Error(e)
   }
}