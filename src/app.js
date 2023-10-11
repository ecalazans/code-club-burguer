import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.app = express();
    this.app.use(cors());

    this.midllewares();
    this.routes();
  }

  midllewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
