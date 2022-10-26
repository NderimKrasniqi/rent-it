import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { IDecodedToken } from '../interfaces/IDecodedToken';

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-auth-token');
  if (!token) {
    throw new NotAuthorizedError();
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT!);
    const { data } = decoded as IDecodedToken;
    if (req.params.userId !== data.id) {
      throw new NotAuthorizedError();
    }
  } catch (error) {
    throw new BadRequestError('Invalid token');
  }
  next();
};
