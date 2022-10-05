import jwt from 'jsonwebtoken';
import { IUserDocument } from '../api/users/users.model';

export function createToken(data: IUserDocument) {
  return jwt.sign({ data }, process.env.SECRET_JWT!, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}
