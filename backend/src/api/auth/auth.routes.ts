import express from 'express';
import validate from '../../middleware/request-validator';
import { LoginInput, RegisterInput } from './auth.validation';
import { register, login } from './auth.handlers';

const router = express.Router();

router.post(
  '/register',
  validate({
    body: RegisterInput,
  }),
  register
);

router.post(
  '/login',
  validate({
    body: LoginInput,
  }),
  login
);

export default router;
