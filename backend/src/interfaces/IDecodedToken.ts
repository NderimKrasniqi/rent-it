export interface IDecodedToken {
  data: IUser;
  exp: number;
  iat: number;
}

export interface IUser {
  id: string;
  email: string;
}
