import express from 'express';

import { createPost, deletePost, getPosts, getPost, likePost, updatePost } from '../controllers/post';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;