import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface userLogDocument extends mongoose.Document {
    userId : string
    deviceId : string
    topic : string
}

const userLogSchema = new Schema({
    userId : {type : String , required : true},
    deviceId : {type : String , required : true},
    topic:{type : String , required : true},
    create : {type : Date , default: Date.now}
})


const userLogModel = mongoose.model<userLogDocument>("userLog" ,userLogSchema)
export default userLogModel