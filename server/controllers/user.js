import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from "../models/user.js"

const secret = 'test'

// export const getUser = async (req,res) => {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(400).json(error.message)
//     }
// };

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await User.findOne({ email });
        if (!oldUser) return res.status(400).json({message: "user not registered"});
        const isPasswords = await bcrypt.compare(password, oldUser.password);
        if (!isPasswords) return res.status(400).json({message: "Credentials not match"})
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
        res.status(200).json({ result: oldUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
};

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) return res.status(400).json("user already registered");
        const hasPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hasPassword, name });
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong" })
    }
};

// export const updateUserDetails = async (req,res) => {
//     const { id } = req.params;
//     const { name, email, password, id } = req.body;
//     const updateUser = await User.findByIdandUpdate({_id: id}, {name, email, password, id}, {new: true})
//     res.status(200).json(updateUser);
// };

// export const deleteUser = async (req,res) => {
//     const { id } = req.params;
//     await User.findByIdandRemove({_id: id})
//     res.status(200).json("Bye...! see you again 🖐️");
// };