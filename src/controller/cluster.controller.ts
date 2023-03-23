import {Request , Response , NextFunction} from 'express'
import { client } from '../app'
import { addCluster ,getCluster , deleteCluster ,updateCluster } from '../service/cluster.service'
import { addUserLog } from '../service/userLog.service'
import fMsg from '../utils/helper'

export const addClusterHandler = async (req  : Request , res : Response , next : NextFunction) => {
    try{
        let result =await addCluster(req.body)
        fMsg(res , "Cluster added" , result)
    }catch(e){
        next(new Error (e))
    }
}

export const getClusterHandler = async (req  : Request , res : Response , next : NextFunction) =>{
    
    try {
        let result = await getCluster(req.query)
        fMsg(res , "Cluster are here" , result)
    }catch(e) {
        next(new Error (e))
    }
}

export const updateClusterHandler = async (req  : Request , res : Response , next : NextFunction) =>{
    
    try {
        let foundCluster = await getCluster(req.query)
        if(!foundCluster[0]){
            return  next(new Error ('cluster not found'))
        }
        let result = await updateCluster(req.query , req.body)
        // if(req.body.topic){
        //     await addUserLog(foundCluster[0]._id , req.body.user[0]._id , req.body.topic)
        // }
        fMsg(res , "Permit are here" , result)
    }catch(e) {
        next(new Error (e))
    }

}

export const deleteClusterHandler = async (req  : Request , res : Response , next : NextFunction) =>{
    
    try {
        let foundCluster = await getCluster(req.query)
        if(!foundCluster[0]){
            return  next(new Error ('cluster not found'))
        }
        let result = await deleteCluster(req.query)
        fMsg(res , "Cluster " , result)
    }catch(e) {
        next(new Error (e))
    }
}

export const changeClusterConditionHandler = async (req  : Request , res : Response , next : NextFunction)=>{
    let foundCluster = await getCluster(req.query)
    if(!foundCluster[0]){
        return  next(new Error ('cluster not found'))
    }
    let serialNo = foundCluster[0].clusterSerialNo
    let name =  foundCluster[0].name 

    console.log(req.body.condition)

    client.publish(`spdm/${serialNo}/mobile/${name}` , req.body.condition)
    await addUserLog(foundCluster[0]._id.toString() , req.body.user[0]._id , `tpdm/${serialNo}/mobile/${name}/${req.body.conditon}`)
    fMsg(res , `device mode changed `)

} 