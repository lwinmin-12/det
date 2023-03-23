import mongoose from "mongoose";
import { Schema } from "mongoose";
import { encode } from "../utils/helper";
import bcrypt from 'bcryptjs'
import { deviceDocument } from "./device.model";
import { roleDocument } from "./role.model";
import { permitDocument } from "./permit.model";

export interface UserInput {
    email : string
    phone : number
    name : string
    password : string
    image : string
    userId : string | null;
}

export interface UserDocument extends UserInput, mongoose.Document {
    userDevice : deviceDocument['_id'];
    roles : roleDocument['_id']
    permits : permitDocument['_id'],
    comparePassword(candidatePassword: string): Promise<Boolean>;
    createdAt: Date;
    updatedAt: Date;
}

 
const userSchema = new Schema ({
    name : {type : String , required : true } ,
    email : {type : String , required : true , unique : true },
    phone : {type : Number , required : true , unique : true},
    password: { type: String, required: true },
    image : {type : String , default : "../default-img/Pfp.jpg"},
    userId : {type : String , default : null},
    userDevice :[{type : Schema.Types.ObjectId , "ref" : 'device'}],
    roles : [{type : Schema.Types.ObjectId ,'ref' : 'role'}],
    permits : [{type : Schema.Types.ObjectId , 'ref' : 'permit'}]
}, {
    timestamps: true,
})

userSchema.pre("save" , async function (next) {
    let user = this as UserDocument

    if(!user.isModified("password")){
        return next();
    }

    let hash = encode(user.password);

    user.password = hash;

    return next()
})

userSchema.methods.comparePassword = async function (
    candidatePassword: string
  ): Promise<boolean> {
    const user = this as UserDocument;
  
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
  };

const userModel = mongoose.model<UserDocument>("user" , userSchema)

export default userModel