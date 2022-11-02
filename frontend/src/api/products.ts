import { useState } from 'react';
import tokenStorage from '../auth/storage';
import { client } from './client';

export const getAllProducts = async () => {
  const response = await client.get('/products');
  return response.data;
};

export const addProduct = async (product: any) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const user = await tokenStorage.getUser();
  const { data } = await client.post(`users/${user?.id}/products`, product, {
    onUploadProgress(progressEvent) {
      setUploadProgress(progressEvent.loaded / progressEvent.total);
    },
  });
  return { data, uploadProgress };
};
