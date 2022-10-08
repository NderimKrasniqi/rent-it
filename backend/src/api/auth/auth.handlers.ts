import { Response, Request } from 'express';
import { BadRequestError } from '../../errors/bad-request-error';
import { compareHash } from '../../utils/hash';
import { createToken } from '../../utils/token';

import { User } from '../users/users.model';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ email });

  if (!exists) {
    throw new BadRequestError('Invalid email or password');
  }

  const isMatch = await compareHash(exists.password, password);

  if (!isMatch) {
    throw new BadRequestError('Invalid email or password');
  }

  const token = createToken(exists);

  return res.status(200).json(token);
};

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userFound = await User.findOne({ email });

  if (userFound) {
    throw new BadRequestError('Email is in use');
  }
  const user = User.insertOne({ name, email, password });
  await user.save();

  const token = createToken(user);

  return res.status(201).header('x-auth-token', token).send(user);
};

export { login, register };
