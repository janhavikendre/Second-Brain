//It's am db,ts file for storing users and the brain (i.e) ideas tweets and video from youtube user wants to store

import mongoose from "mongoose";
import { ObjectId, Types } from "mongoose";

//user Schema 

const UserSchema = new mongoose.Schema({
    email : {type : String , required : true, unique : true},
    password : {type : String , required : true},
    username : {type : String , required : true},
    image : {type : String },
})

export const User = mongoose.model('User', UserSchema);

const BrainSchema = new mongoose.Schema({
    user: {type: Types.ObjectId, ref:"User" },
    contentType : {type : String , enum : ['twitter', 'googledocs' , 'youTube' ,'instagram' ]},
    contentLink : {type : String},
    title : {type : String},
    description : {type : String},
    tags : [{type : String}],
    manualContent : {type : String},
    createdAt : {type : Date , default : Date.now}
})

export const Brain = mongoose.model('Brain', BrainSchema);