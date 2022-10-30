import { IUser } from './../interfaces/IUser';
import { useQuery } from '@tanstack/react-query';
import Users from '../api/user';
import { IErrorResponse } from '../interfaces/IErrorResponse';

export const useUser = () => {
  const { data, error, isLoading } = useQuery<IUser, IErrorResponse>(
    ['user'],
    Users.getUser
  );
  return { data, error, isLoading };
};
