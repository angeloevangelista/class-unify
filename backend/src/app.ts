import express from 'express';
import 'express-async-errors';

import dotenv from 'dotenv';
dotenv.config();

import './mongoose';
import routes from './routes';
import errorMiddleware from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

export default app;
