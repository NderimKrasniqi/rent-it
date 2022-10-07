import { IUser } from './IUser';

export interface IDecodeResponse {
  data: IUser;
  exp: number | undefined;
  iat: number;
}
