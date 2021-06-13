import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { User } from "../models/user.js"

// export const getUser = async (req,res) => {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(400).json(error.message)
//     }
// };

export const signIn = async (req,res) => {
    const { email, password } = req.body;

    try {
        const oldUser = User.findOne({email});

        if(!oldUser) return res.json("user not registered");

        const isPasswords = await bcrypt.compare(password, oldUser.password);

        if(!isPasswords) return res.json("Credentials not match")

        const token = jwt.sign({email: oldUser.email, Id:oldUser._id}, secret, {expires: "1h"});

        res.status(200).json({result: oldUser, token});

    } catch (error) {
        res.status(500).json({error:error.message, message: "Something went wrong"})
    }
};

export const signUp = async (req,res) => {
    const { name, email, password, id } = req.body;

    try {
        const oldUser = User.findOne({email});

        if(!oldUser) return res.json("user not registered");

        const hasPassword = await bcrypt.hash(password, 12);

        const result = await users.create({email, password: hasPassword, name});

        const token = jwt.sign({email: result.email, Id:result._id}, secret, {expires: "1h"});

        res.status(200).json({result: oldUser, token});

    } catch (error) {
        res.status(500).json({error:error.message, message: "Something went wrong"})
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