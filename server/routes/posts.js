import express from 'express'

import { getPosts, createPost } from '../controllers/posts.js' //in react, we don't need to add the extension but in node, it's required

const router = express.Router()

router.get('/',getPosts)
router.post('/',createPost)

export default router