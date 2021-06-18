import mongoose from 'mongoose';
import express from 'express';
import PostMessage from '../models/postMessage.js';

// For Http status code : https://restapitutorial.com/httpstatuscodes.html


const router = express.Router();

export const getPosts= async(req,res,next) =>{
    try {
        const allmessages = await PostMessage.find();
        res.status(200).json(allmessages);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

export const createPost= async (req,res) =>{
    const post =  req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        console.log("Created Post successfully");
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }

};

export const updatePost = async(req,res)=>{
    const id = req.params.id;
    const post = req.body;
    // Check if the Id is moongoose Id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No memory available with that id');
    }

    const newPost = await PostMessage.findByIdAndUpdate(id,{...post,id},{new:true});
    res.json(newPost);
}