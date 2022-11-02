import express from 'express';
import validate from '../../middleware/request-validator';
import { requireAuth } from '../../middleware/require-auth';
import productRouter from '../products/products.routes';
import { getUser, updateUser, deleteUser } from './users.handlers';
import { userParam } from './users.validate';

const router = express.Router();

router.get('/:userId', validate({ params: userParam }), requireAuth, getUser);
router.put(
  '/:userId',
  [validate({ params: userParam }), requireAuth],
  updateUser
);
router.delete(
  '/:userId',
  [validate({ params: userParam }), requireAuth],
  deleteUser
);

router.use(
  '/:userId/products',
  [validate({ params: userParam }), requireAuth],
  productRouter
);

export default router;
