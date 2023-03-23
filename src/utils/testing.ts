import {Request , Response , NextFunction} from 'express'

export const testingFunction = async (req  : Request , res : Response , next : NextFunction) =>{
  console.log('hehe')
}