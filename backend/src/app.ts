import express from 'express';
import 'express-async-errors';

import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import './mongoose';
import routes from './routes';
import errorMiddleware from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

export default app;
