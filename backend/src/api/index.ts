import express from 'express';

import auth from './auth/auth.routes';
import users from './users/users.routes';
import products from './products/products.routes';

const router = express.Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/products', products);

export default router;
