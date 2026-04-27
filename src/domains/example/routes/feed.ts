import express, { Router } from 'express';
import { body } from 'express-validator';
import * as feedController from '../controller/feed';

const router: Router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  [
    body('title')
      .trim()
      .isLength({ min: 7 })
      .withMessage('Title must be at least 7 characters long.'),
    body('content')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Content must be at least 5 characters long.'),
  ],
  feedController.createPost
);

// GET /feed/post/:postId
router.get('/post/:postId', feedController.getPost);

export default router;