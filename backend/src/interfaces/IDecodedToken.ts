import { IUserDocument } from '../api/users/users.model';

export interface IDecodedToken {
  data: IUser;
  exp: number;
  iat: number;
}

export interface IUser {
  id: string;
  email: string;
}
