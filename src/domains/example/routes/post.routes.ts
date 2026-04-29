import { Router } from 'express';
import { Service } from 'typedi';
import { body } from 'express-validator';
import { PostController } from '../controller/post.controller';
import multer from 'multer'; // 1. Import multer

// 2. Configure storage (this saves files to an 'images' folder)
// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images'); 
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: fileStorage }); 
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
     //upload.single('imageUrl'),
      [
        body('title').isLength({ min: 7 }),
        body('content').isLength({ min: 5 }),
      ],
      this.controller.create
      
    );

    this.router.put('/post/:postId',
      [
        body('title').isLength({ min: 7 }),
        body('content').isLength({ min: 5 }),
      ], this.controller.update);
    this.router.delete('/post/:postId', this.controller.delete);
  }

  getRoutes(): Router {
    return this.router;
  }
}