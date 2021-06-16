import PostMessage from '../models/postMessage.js';

// For Http status code : https://restapitutorial.com/httpstatuscodes.html

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
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }

};