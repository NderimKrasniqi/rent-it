import { IToken } from '../interfaces/IToken';
import { IUser } from '../interfaces/IUser';
import { client } from './client';

const login = (email: string, password: string) => {
  return client.post<string>('auth/login', { email, password });
};

const register = (name: string, email: string, password: string) => {
  return client.post<IUser>('auth/register', {
    name,
    email,
    password,
  });
};
export default { login, register };
