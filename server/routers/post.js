import express from 'express';

import { createPost, deletePost, getPosts, getSinglePost, likePost, updatePost } from '../controllers/post';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getPosts)
router.get('/:id', getSinglePost)

router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.patch('/:id/likePost', auth, likePost)
router.delete('/:id', auth, deletePost)

export default router;