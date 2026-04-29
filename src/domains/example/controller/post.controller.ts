import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import { validationResult } from 'express-validator';
import { PostService } from '../service/post.service';

@Service()
export class PostController {
  constructor(private readonly service: PostService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await this.service.getAll();
      res.status(200).json({ posts });
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.postId as string;
      const post = await this.service.getById(postId);
      res.status(200).json({ post });
    } catch (err) {
      next(err);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    console.log(req,res);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'Validation failed' });
    }
    if(!req.file){
      const error=new Error('No image provided .');
      // error.statusCode=422;
      return res.status(422).json({message:'No image provided'});
    }
    try {
      const post = await this.service.create(req.body,req.file);
      res.status(201).json({ post });
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.postId as string;
      const post = await this.service.update(postId, req.body);
      res.status(200).json({ post });
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.postId as string;
      await this.service.delete(postId);
      res.status(200).json({ message: 'Deleted' });
    } catch (err) {
      next(err);
    }
  };
}