import { Response, Request } from 'express';
import { BadRequestError } from '../../errors/bad-request-error';
import { compareHash } from '../../utils/hash';
import { createToken } from '../../utils/token';

import { User } from '../users/users.model';

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userFound = await User.findOne({ email });

  if (userFound) {
    throw new BadRequestError('Email is in use');
  }
  const user = User.insertOne({ email, password });
  await user.save();

  const token = createToken(user);

  const options = {
    expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
    httpOnly: true,
  };

  return res.status(201).cookie('access-token', token, options).send(user);
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ email });

  if (!exists) {
    throw new BadRequestError('Invalid credentials');
  }

  const isMatch = await compareHash(exists.password, password);

  if (!isMatch) {
    throw new BadRequestError('Invalid Credentials');
  }

  const token = createToken(exists);
  const options = {
    expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
    httpOnly: true,
  };

  return res.status(201).cookie('access-token', token, options).send(exists);
};

export { login, register };
