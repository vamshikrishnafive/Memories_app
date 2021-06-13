import express from "express";
import { signUp, signIn, updateUserDetails, deleteUser} from "../controllers/user";

const routers = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
// router.patch('/:id', updateUserDetails);
// router.delete('/:id', deleteUser);

export default routers;