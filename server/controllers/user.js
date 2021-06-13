import { User } from "../models/user.js"

export const getUser = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

export const createUser = async (req,res) => {
    const { name, email, password, id } = req.body;
    const users = new User({name, email, password, id});
    try {
        await users.save();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

export const updateUserDetails = async (req,res) => {
    const { id } = req.params;
    const { name, email, password, id } = req.body;
    const updateUser = await User.findByIdandUpdate({_id: id}, {name, email, password, id}, {new: true})
    res.status(200).json(updateUser);
};

export const deleteUser = async (req,res) => {
    const { id } = req.params;
    await User.findByIdandRemove({_id: id})
    res.status(200).json("Bye...! see you again 🖐️");
};