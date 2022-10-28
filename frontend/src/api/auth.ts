import { IUser } from '../interfaces/IUser';
import { auth } from './client';

const login = (email: string, password: string) => {
  return auth.post<string>('auth/login', { email, password });
};

const register = (name: string, email: string, password: string) => {
  return auth.post<IUser>('auth/register', {
    name,
    email,
    password,
  });
};
export default { login, register };
