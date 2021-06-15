import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: { type:String, required:true},
    email: { type:String, required:true},
    password: { type:String, required:true},
    phone: Number,
    id: String
});

export default mongoose.model('User', UserSchema)