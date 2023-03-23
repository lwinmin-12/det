import {Request , Response , NextFunction} from 'express'
import { deleteUserLog, getUserLog } from '../service/userLog.service'
import fMsg from '../utils/helper'

export const getUserLogHandler = async (req  : Request, res : Response , next : NextFunction) =>{
    try{
        let result = await getUserLog(req.query)
        fMsg(res , "user log" , result)
    }catch(e){
        throw new Error(e)
    }
}

export const deleteUserLogHandler = async (req  : Request, res : Response , next : NextFunction) =>{
    try{
        let result = await deleteUserLog(req.query)
        fMsg(res , 'user log deleted')
    }catch(e){

    }
}