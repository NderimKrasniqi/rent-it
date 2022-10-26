import express from 'express';
import validate from '../../middleware/request-validator';
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from './products.handles';

const router = express.Router({ mergeParams: true });

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
