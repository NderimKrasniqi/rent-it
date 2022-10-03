import client from './client';

const login = (email: string, password: string) =>
  client.post('/login', { email, password });

export default { login };
