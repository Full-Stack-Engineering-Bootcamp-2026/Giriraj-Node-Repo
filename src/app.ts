import 'reflect-metadata';
import express, { Express, Router } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import { Container } from 'typedi';

import { logger } from './common/utils/logger';
import {
  errorHandler,
  notFoundHandler,
} from './common/middleware/error-handler.middleware';

import { PostRoutes } from './domains/example/routes/post.routes';

dotenv.config();

class Application {
  public app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || '8080', 10);

    this.initializeDatabase();
    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private async initializeDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URI as string);
      logger.info('MongoDB connected');
    } catch (err) {
      logger.error('DB connection failed');
      process.exit(1);
    }
  }

  private initializeMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/images', express.static(path.join(__dirname, 'images')));
  }

  private initializeRoutes() {
    const v1Router = Router();
    const postRoutes = Container.get(PostRoutes);

    v1Router.use('/feed', postRoutes.getRoutes());

    this.app.use('/api/v1', v1Router);

    this.app.get('/health', (_, res) => {
      res.json({ status: 'OK' });
    });
  }

  private initializeErrorHandling() {
    this.app.use(notFoundHandler);
    this.app.use(errorHandler);
  }

  public start() {
    this.app.listen(this.port, () => {
      logger.info(`Server running on port ${this.port}`);
    });
  }
}

const app = new Application();
app.start();