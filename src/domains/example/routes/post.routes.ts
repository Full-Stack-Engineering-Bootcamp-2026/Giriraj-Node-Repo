import { Router } from 'express';
import { Service } from 'typedi';
import { body } from 'express-validator';
import { PostController } from '../controller/post.controller';

@Service()
export class PostRoutes {
  public router: Router;

  constructor(private readonly controller: PostController) {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/posts', this.controller.getAll);
    this.router.get('/post/:postId', this.controller.getById);

    this.router.post(
      '/post',
      [
        body('title').isLength({ min: 7 }),
        body('content').isLength({ min: 5 }),
      ],
      this.controller.create
    );

    this.router.put('/post/:postId', this.controller.update);
    this.router.delete('/post/:postId', this.controller.delete);
  }

  getRoutes(): Router {
    return this.router;
  }
}