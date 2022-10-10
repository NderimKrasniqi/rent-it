import { IUser } from './IUser';

export interface IDecodedToken {
  data: IUser;
  exp: number;
  iat: number;
}
