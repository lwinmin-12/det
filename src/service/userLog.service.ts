import { FilterQuery, UpdateQuery } from "mongoose";
import userLogModel from "../model/userLog.model";
import { userLogDocument } from "../model/userLog.model";

export const getUserLog = async (query :  FilterQuery<userLogDocument>) =>{
    try{
     return await userLogModel.find(query).lean().sort({create : -1})
    }catch(e){
     throw new Error(e);
    }
 }

export const addUserLog = async ( deviceId : any, userId : string , topic : string ) => {
    try{
         await userLogModel.create({
            deviceId : deviceId ,
            userId : userId,
            topic 
        })
        console.log('saved')
    }catch(e){
        throw new Error(e)
    }
}

export const deleteUserLog = async ( query : UpdateQuery<userLogDocument> ) => {
    try{
        await userLogModel.deleteMany(query)
    }catch(e){
        throw new Error(e)
    }
}