import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title:String,
    message:String,
    tags:[String],
    selectedFile:String,
    likeCount: { type:[String],default:[]},
    createdAt: {
        type: Date,
        default:new Date
    },
})

const PostMessage = mongoose.model('postMessage', PostSchema);

export default PostMessage;