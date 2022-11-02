import { AxiosError } from 'axios';
import { IErrorResponse } from './../interfaces/IErrorResponse';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/user';
import { IUser } from '../interfaces/IUser';

export const useUser = () => {
  const query = useQuery<IUser, AxiosError<IErrorResponse>>(['user'], getUser, {
    retry: false,
  });
  return { ...query };
};
