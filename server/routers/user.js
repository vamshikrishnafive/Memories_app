import express from "express";
import { signUp, signIn } from "../controllers/user";

const routers = express.Router();

routers.post('/signin', signIn);
routers.post('/signup', signUp);
// router.patch('/:id', updateUserDetails);
// router.delete('/:id', deleteUser);

export default routers;