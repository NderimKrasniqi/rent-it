import axios, { AxiosError } from 'axios';
import tokenStorage from '../auth/storage';
import { IErrorResponse } from '../interfaces/IErrorResponse';
import { client } from './client';

const getAllProducts = async () => {
  const response = await client.get('/products');
  return response.data;
};

const addProduct = async (product: any) => {
  try {
    const user = await tokenStorage.getUser();
    const { data } = await client.post(`users/${user?.id}/products`, product);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const serverError = error as AxiosError<IErrorResponse>;
      return serverError.response?.data.errors;
    }
  }
};

export default { getAllProducts, addProduct };
