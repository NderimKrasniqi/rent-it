import axios, { AxiosError } from 'axios';
import tokenStorage from '../auth/storage';
import { IErrorResponse } from '../interfaces/IErrorResponse';
import { client } from './client';

const getUser = async () => {
  try {
    const user = await tokenStorage.getUser();
    const { data } = await client.get(`users/${user?.id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverError = error as AxiosError<IErrorResponse>;
      return serverError.response?.data.errors;
    }
  }
};

export default { getUser };
