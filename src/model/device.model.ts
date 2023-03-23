import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

export interface deviceInput {
    serialNo : string
    deviceId : string
    name : string
    deviceCondition : string
    mode : string
}

export interface deviceDocument extends deviceInput , mongoose.Document{
    clusters : []
    createdAt: Date;
    updatedAt: Date;
}

const deviceSchema = new Schema({
    name : {type : String , required : true  , unique : true } ,
    deviceId : {type : String , required : true  , unique : true },
    serialNo : {type : String , required : true  , unique : true} ,
    deviceCondition : {type : Boolean , default : true} ,
    mode : {type : String ,  default : "manual"},
    clusters : [{type : Schema.Types.ObjectId , 'ref' : 'cluster'}]
},{
    timestamps : true
})

const deviceModel = mongoose.model("device" , deviceSchema)
export default deviceModel