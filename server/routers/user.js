import express from "express";
import { createUser, deleteUser, getUser, updateUserDetails } from "../controllers/user";

const routers = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.patch('/:id', updateUserDetails);
router.delete('/:id', deleteUser);

export default routers;