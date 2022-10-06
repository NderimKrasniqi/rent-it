import client from './client';

interface ILoginResponse {
  token: string;
}
const login = (email: string, password: string) =>
  client.post<ILoginResponse>('auth/login', { email, password });

const register = () => {
  client.post('auth/register');
};
export default { login, register };
