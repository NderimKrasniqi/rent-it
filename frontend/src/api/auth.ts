import client from './client';

interface ILoginResponse {
  token: string;
}

export interface IUser {
  avatar?: string;
  name?: string;
  email: string;
  password: string;
}

const login = (userInput: IUser) =>
  client.post<ILoginResponse>('auth/login', userInput);

const register = () => {
  client.post('auth/register');
};
export default { login, register };
