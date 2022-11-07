import express from 'express';
import validate from '../../middleware/request-validator';
import { requireAuth } from '../../middleware/require-auth';
import productRouter from '../products/products.routes';
import { getUser, updateUser, deleteUser } from './users.handlers';
import { userParam, UserPartial } from './users.validate';

const router = express.Router();

const middlewares = [requireAuth, validate({ params: userParam })];

router.use('/:userId/products', middlewares, productRouter);

router
  .route('/:userId')
  .get(middlewares, getUser)
  .put([requireAuth, validate({ params: userParam, body: UserPartial })], updateUser)
  .delete(middlewares, deleteUser);

export default router;
