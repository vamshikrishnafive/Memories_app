import { Mongoose } from 'mongoose';
import PostMessage from '../models/post.js'

export const getPosts = async (req,res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

export const getSinglePost = async (req,res) => {
    const { id } = req.params;
    try {
        const postMessage = await PostMessage.findById({_id: id});
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

export const createPost = async(req,res) => {
    const {title, message, selectedFile} = req.body;
    const newPostMessage = new PostMessage({title, message, selectedFile});
    try {
        await newPostMessage.save();
        res.status(200).json(newPostMessage)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const updatePost = async(req,res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post found with the ID")
    const updatePost = { title, message, creator, selectedFile, tags, _id: id }
    await PostMessage.findByIdAndUpdate({_id: id}, updatePost, {new: true});
    res.status(201).json(updatePost)
}

export const likePost = async(req,res) => {
    const { id } = req.params;
    if(!req.userId) {
        return res.json({"your not unauthorized"})
    }
    if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post found with the ID")
    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if(index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.like.filter((id) => id != String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate({_id: id}, post, {new:true})
    res.status(201).json(updatedPost)
}

export const deletePost = async(req,res) => {
    const { id } = req.params;
    if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post found with the ID")
    try {
        await PostMessage.findByIdAndRemove({_id: id});
        res.status(201).json("post successfully deleted")
    } catch (error) {
        res.status(400).json(error.message);
    }
}