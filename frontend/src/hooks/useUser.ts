import { IUser } from './../interfaces/IUser';
import { useQuery } from '@tanstack/react-query';
import dataApi from '../api/data';
import { IErrorResponse } from '../interfaces/IErrorResponse';

export const useUser = () => {
  const { data, error, isLoading } = useQuery<IUser, IErrorResponse>(
    ['user'],
    dataApi.getUser
  );
  return { data, error, isLoading };
};
