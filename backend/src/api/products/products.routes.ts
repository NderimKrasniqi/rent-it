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

router
  .route('/')
  .get(getProducts)
  .post(requireAuth, validate({ params: productParam }), createProduct);

router
  .route('/:id')
  .get([validate({ params: productParam }), requireAuth], getProduct)
  .put([validate({ params: productParam }), requireAuth], updateProduct)
  .delete([validate({ params: productParam }), requireAuth], deleteProduct);

export default router;
