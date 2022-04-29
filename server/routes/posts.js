import express from 'express';

//We have to specify the extension like .js in node. However, in React, we don't need to do it. 
import { getPosts, createPost, updatePost } from '../controllers/posts.js';
// import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// router.get('/:id', getPost);
router.patch('/:id', updatePost); //updating existing documents
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;