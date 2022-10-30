import { FieldValues } from 'react-hook-form';
import { IUser } from '../interfaces/IUser';
import { client } from './client';

const login = (input: FieldValues) => {
  return client.post<string>('auth/login', input);
};

const register = (input: FieldValues) => {
  return client.post<IUser>('auth/register', input);
};
export default { login, register };
