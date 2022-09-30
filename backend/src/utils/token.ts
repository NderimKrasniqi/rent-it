import jwt from 'jsonwebtoken';
import { UserDocument } from '../api/users/users.model';

export function createToken(data: UserDocument) {
  return jwt.sign({ data }, process.env.SECRET_JWT!, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}
