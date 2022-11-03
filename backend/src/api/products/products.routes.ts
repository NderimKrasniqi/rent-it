import express from 'express';
import validate from '../../middleware/request-validator';
import { requireAuth } from '../../middleware/require-auth';
import { userParam } from '../users/users.validate';
import { product, productParam } from './product.validation';
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from './products.handles';

const router = express.Router({ mergeParams: true });
const middlewares = [requireAuth, validate({ params: productParam })];

router.route('/').get(getProducts).post(middlewares, createProduct);

router
  .route('/:id')
  .get(middlewares, getProduct)
  .put(middlewares, updateProduct)
  .delete(middlewares, deleteProduct);

export default router;
