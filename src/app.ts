import './config/env.config';
import express, { Application } from 'express';
import cors from 'cors';

export function createApp(): Application {
  const app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: ['*'],
      credentials: true,
    }),
  );

  return app;
}

export default createApp;
