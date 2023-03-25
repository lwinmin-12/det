import deviceModel ,{deviceInput , deviceDocument}from "../model/device.model";
import { FilterQuery, UpdateQuery } from "mongoose";
import { clusterDocument } from "../model/cluster.model";
import { addUserLog } from "./userLog.service";
import { UserDocument } from "../model/user.model";
export const addDevice = async (payload : deviceInput) => {
    try {
      return await deviceModel.create(payload)
    }catch(e){
       throw new Error(e);
    }
}

export const getDevice = async (query :  FilterQuery<deviceDocument>) =>{
    try{
     return await deviceModel.find(query).lean().populate({path : "clusters"})
    }catch(e){
     throw new Error(e);
    }
 }
 
 export const deleteDevice = async (query :  FilterQuery<deviceDocument>) =>{
     try{
      return await deviceModel.deleteMany(query)
     }catch(e){
      throw new Error(e);
     }
  }
 
  export const updateDevice = async (query : FilterQuery<deviceDocument> , body : UpdateQuery<deviceDocument>) =>{
     try{
          await deviceModel.updateMany(query , body)
         return await deviceModel.find(query).lean()
        }catch(e){
         throw new Error(e);
        }
  }

  export const deviceAddCluster = async (deviceId : deviceDocument['_id'] , clusterId : clusterDocument['_id']) => {
    try {
     await deviceModel.findByIdAndUpdate( deviceId ,{$push : {clusters : clusterId}} )
     return await deviceModel.findById(deviceId)
    
    }catch (e : any){
     throw new Error(e)
    }
 }
 export const deviceRemoveCluster = async (deviceId : deviceDocument['_id'] , clusterId : clusterDocument['_id']) => {
    try {
     await deviceModel.findByIdAndUpdate( deviceId ,{$pull : {clusters : clusterId}} )
     return await deviceModel.findById(deviceId)
    }catch (e : any){
     throw new Error(e)
    }
 }

 export const updateDeviceBySerialNo = async (serialNo : deviceDocument['serialNo'], body : {} , income : string)=>{
         try{
           await deviceModel.findOneAndUpdate({serialNo} ,body)
           let device = await deviceModel.find({serialNo})
            console.log(device)
            addUserLog(device[0]._id , 'action by device' , income)
         }catch(e){
            throw new Error(e)
         }
 }


 export const deviceAddUser = async (deviceId : deviceDocument['_id'] , userId : UserDocument['_id'])=>{
   try{
     await deviceModel.findByIdAndUpdate( deviceId ,{$push : {deviceOwner : userId}} )
     return await deviceModel.findById(deviceId)
   }catch(e){

   }
 }

 export const deviceRemoveUser = async (deviceId : deviceDocument['_id'] , userId : UserDocument['_id'])=>{
   try{
     await deviceModel.findByIdAndUpdate( deviceId ,{$pull : {deviceOwner : userId}} )
     return await deviceModel.findById(deviceId)
   }catch(e){

   }
 }