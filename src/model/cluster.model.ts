import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

export interface clusterInput {
    status : string
    condition :  string
}

export interface clusterDocument extends clusterInput, mongoose.Document{
    name : string
    clusterSerialNo : string
    createdAt: Date;
    updatedAt: Date;
}

const clusterSchema = new Schema({
    name : {type : String , required : true  , unique : true } ,
    clusterSerialNo : {type : String , required : true },
    condition : {type : String , required : true  } ,
    status : {type : String , required : true} ,
},{
    timestamps : true
})

const clusterModel = mongoose.model<clusterDocument>("cluster" , clusterSchema)
export default clusterModel          