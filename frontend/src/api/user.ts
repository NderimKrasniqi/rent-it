import tokenStorage from '../auth/storage';
import { client } from './client';

export const getUser = async () => {
  const user = await tokenStorage.getUser();
  const response = await client.get(`/users/${user?.id}`);
  console.log(response.data);
  return response.data;
};
