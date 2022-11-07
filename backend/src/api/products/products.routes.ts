import express from 'express';
import validate from '../../middleware/request-validator';
import { requireAuth } from '../../middleware/require-auth';
import { userParam } from '../users/users.validate';
import { Product, productParam, ProductPartial } from './product.validate';
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from './products.handles';

const router = express.Router({ mergeParams: true });
const middlewares = [requireAuth, validate({ params: productParam })];

router
  .route('/')
  .get(getProducts)
  .post([requireAuth, validate({ params: userParam, body: Product })], createProduct);

router
  .route('/:id')
  .get(middlewares, getProduct)
  .put([requireAuth, validate({ params: productParam, body: ProductPartial })], updateProduct)
  .delete(middlewares, deleteProduct);

export default router;
