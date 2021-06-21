import express from 'express';
const router = express.Router();
import {getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} from '../controller/posts.js'

router.get('/', getPosts);
router.post('/',createPost);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);
router.put('/:id/like',likePost);
export default router;