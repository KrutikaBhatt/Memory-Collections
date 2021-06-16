// We wil be using Moongoose schema

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile :String,
    likeCount :{
        type:Number,
        default : 0
    },
    created_at :{
        type:Date,
        default:new Date()
    },
});

// Now we have a schema- We are going to turn it into models

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;