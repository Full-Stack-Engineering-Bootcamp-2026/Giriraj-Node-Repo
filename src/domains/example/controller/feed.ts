import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import Post from '../models/post';

// Custom error interface
interface HttpError extends Error {
  statusCode?: number;
}

// GET /posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      message: 'Fetched posts successfully.',
      posts: posts,
    });
  } catch (err) {
    const error = err as HttpError;
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// POST /post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error: HttpError = new Error(
      'Validation failed, entered data is incorrect.'
    );
    error.statusCode = 422;
    throw error;
  }

  const { title, content } = req.body;

  const post = new Post({
    title,
    content,
    imageUrl: 'images/duck.jpg',
    creator: { name: 'Maximilian' },
  });

  try {
    const result = await post.save();

    res.status(201).json({
      message: 'Post created successfully!',
      post: result,
    });
  } catch (err) {
    const error = err as HttpError;
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// GET /post/:postId
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      const error: HttpError = new Error('Could not find post.');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: 'Post fetched.',
      post: post,
    });
  } catch (err) {
    const error = err as HttpError;
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};