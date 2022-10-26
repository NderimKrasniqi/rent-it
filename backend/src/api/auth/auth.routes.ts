import express from 'express';
import validate from '../../middleware/request-validator';
import { authUser } from './auth.validation';
import { register, login } from './auth.handlers';

const router = express.Router();

router.post(
  '/register',
  validate({
    body: authUser,
  }),
  register
);

router.post(
  '/login',
  validate({
    body: authUser,
  }),
  login
);

export default router;
