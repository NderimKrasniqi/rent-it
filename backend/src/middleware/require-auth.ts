import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { IDecodedToken } from '../interfaces/IDecodedToken';

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');
  if (!token) {
    throw new NotAuthorizedError();
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_KEY!) as IDecodedToken;
    const { data } = decodedToken;
    if (req.params.userId && req.params.userId !== data.id) {
      throw new NotAuthorizedError();
    }
  } catch (err) {
    throw new NotAuthorizedError();
  }
};
