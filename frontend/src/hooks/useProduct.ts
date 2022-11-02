import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { client } from '../api/client';

type TUseAddProduct = {
  product: FieldValues;
  userId: string | undefined;
};
export const useAddProduct = () => {
  const [progress, setProgress] = useState<number>(0);
  const query = useMutation(({ product, userId }: TUseAddProduct) =>
    client.post(`users/${userId}/products`, product, {
      onUploadProgress(progressEvent) {
        setProgress(progressEvent.loaded / progressEvent.total);
      },
    })
  );
  return { ...query, progress };
};
