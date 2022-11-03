import express from 'express';
import validate from '../../middleware/request-validator';
import { requireAuth } from '../../middleware/require-auth';
import productRouter from '../products/products.routes';
import { getUser, updateUser, deleteUser } from './users.handlers';
import { userParam } from './users.validate';

const router = express.Router();

router.use(
  '/:userId/products',
  [validate({ params: userParam }), requireAuth],
  productRouter
);

router
  .route('/:userId')
  .get([validate({ params: userParam }), requireAuth], getUser)
  .put([validate({ params: userParam }), requireAuth], updateUser)
  .delete([validate({ params: userParam }), requireAuth], deleteUser);

export default router;
