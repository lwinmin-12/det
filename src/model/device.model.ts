import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

export interface deviceInput {
    serialNo : string
    name : string
    mode : string
}

export interface deviceDocument extends deviceInput , mongoose.Document{
    clusters : []
    deviceOwner : []
    createdAt: Date;
    updatedAt: Date;
}

const deviceSchema = new Schema({
    name : {type : String , required : true  , unique : true } ,
    deviceOwner : [{type : Schema.Types.ObjectId , 'ref' : 'user'}],
    serialNo : {type : String , required : true  , unique : true} ,
    mode : {type : String ,  default : "manual"},
    clusters : [{type : Schema.Types.ObjectId , 'ref' : 'cluster'}]
},{
    timestamps : true
})

const deviceModel = mongoose.model("device" , deviceSchema)
export default deviceModel