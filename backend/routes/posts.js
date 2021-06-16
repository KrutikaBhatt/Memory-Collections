import express from 'express';
const router = express.Router();
import {getPosts,createPost} from '../controller/posts.js'

router.get('/', getPosts);
router.post('/',createPost);

export default router;