import express from 'express';
import { createPost, deletePost, getPosts, getSinglePost, likePost, updatePost } from '../controllers/post';

const router = express.Router();

router.get('/', getPosts)
router.get('/:id', getSinglePost)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.patch('/:id/likePost', likePost)
router.delete('/:id', deletePost)

export default router;