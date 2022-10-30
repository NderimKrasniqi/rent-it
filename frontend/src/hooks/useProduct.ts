import { FieldValues } from 'react-hook-form';
import { IProduct } from './../interfaces/IProduct';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Product from '../api/products';
import { IErrorResponse } from '../interfaces/IErrorResponse';

export const useProduct = () => {
  const queryClient = useQueryClient();
  const {
    data,
    error,
    mutate: createProduct,
    isError,
    isLoading,
  } = useMutation<IProduct, IErrorResponse, FieldValues>(Product.addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });
  return { data, error, createProduct, isError, isLoading };
};

// const add = useMutation(async (employee) => {
//   const { data } = await axios.post('/api/Employee', employee);
//   return data;
// });
