import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import colors from 'colors';
import * as dotenv from 'dotenv';
import 'express-async-errors';
import { errorHandler } from './middleware/error-handler';
import api from './api/index';
import { NotFoundError } from './errors/not-found-error';

dotenv.config();
colors.enable();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/healthcheck', (req, res) => {
  res.json({
    message: 'We Are Good To Go :D',
  });
});
app.use('/api/v1', api);

app.all('/*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
