import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { BadRequestError } from '../errors/bad-request-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export interface CustomRequest extends Request {
  user: string | JwtPayload;
}

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
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    (req as CustomRequest['user']) = decoded;
  } catch (error) {
    throw new BadRequestError('Invalid token');
  }
  next();
};
