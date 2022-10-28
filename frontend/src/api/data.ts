import axios, { AxiosError } from 'axios';
import tokenStorage from '../auth/storage';
import { IErrorResponse } from '../interfaces/IErrorResponse';
import { client } from './client';

const getAllProducts = async () => {
  const response = await client.get('/products');
  return response.data;
};

const getUser = async () => {
  try {
    const user = await tokenStorage.getUser();
    const { data } = await client.get(`/${user?.id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverError = error as AxiosError<IErrorResponse>;
      return serverError.response?.data.errors;
    }
  }
};

const addProduct = async (product: any) => {
  try {
    const user = await tokenStorage.getUser();
    const { data } = await client.post(`${user?.id}/products`, product);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverError = error as AxiosError<IErrorResponse>;
      return serverError.response?.data.errors;
    }
  }
};

export default { getAllProducts, getUser, addProduct };
