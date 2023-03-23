import clusterModel ,{clusterDocument, clusterInput} from '../model/cluster.model'
import { FilterQuery , UpdateQuery } from 'mongoose'
import { updateDeviceBySerialNo } from './device.service'
import { addUserLog } from './userLog.service'



export const getCluster = async (query :FilterQuery<clusterDocument> ) =>{

    try{
       return clusterModel.find(query).lean()
    }catch(e){
        throw new Error (e)
    }

}

export const addCluster = async (body : clusterInput ) =>{

    try{
      return new clusterModel(body).save()
    }catch(e){
        throw new Error (e)
    }

}

export const updateCluster = async (query: FilterQuery<clusterDocument>, body: UpdateQuery<clusterDocument>)=>{

    try{
        await clusterModel.updateMany(query , body)
       return await clusterModel.find(query).lean()
      }catch(e){
       throw new Error(e);
      }

}

export const deleteCluster = async (query :FilterQuery<clusterDocument> ) =>{

    try{
       return clusterModel.deleteMany(query)
    }catch(e){
        throw new Error (e)
    }

}

export const clusterUpdateBySerialNo = async (serialNo : clusterDocument['clusterSerialNo'] , tank : string , message : string)=>{
    try{
      let cluster = await clusterModel.find({ clusterSerialNo : serialNo})
    //   console.log(cluster)
    let activeTank =  cluster.find((ea : any)=> ea.name == tank)

    if(message == 'start' ||  message == 'stop'){
        await clusterModel.findByIdAndUpdate(activeTank?._id , {condition : message})
        let result = await clusterModel.find({_id :activeTank?._id })
        console.log(result)
        addUserLog(activeTank?._id , 'action by device' , `spdm/${serialNo}/device/${activeTank?.name}/${message}`)

    }else{
        if(message == 'Error'){
            // await updateDeviceBySerialNo(serialNo , {deviceCondition : false})
            console.log(message)
            return
        }
        await clusterModel.findByIdAndUpdate(activeTank?._id , {status : message})
        let result = await clusterModel.find({_id :activeTank?._id })
        console.log(result)
        addUserLog(activeTank?._id , 'action by device' , `spdm/${serialNo}/device/${activeTank?.name}/lvl/${message}`)

    }
   
      }catch(e){
         throw new Error(e)
      }
}