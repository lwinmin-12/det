import { NextFunction , Response , Request } from "express";

export const userRoleValidator  = (role : string)=>(req : Request , res : Response , next : NextFunction)=>{
    const foundRole = req.body.user.email == role
    if(!foundRole){
        return next(new Error ('You dont have this permission'))
       }
       next()
}