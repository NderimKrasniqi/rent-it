import authApi, { ILoginResponse } from './auth';
import tokenStorage from '../auth/storage';
import jwtDecode from 'jwt-decode';
import { IDecodeResponse } from '../interfaces/IDecodeResponse';
import { useContext, useState } from 'react';
import AuthContext from '../auth/context';
import axios, { AxiosError } from 'axios';
import { IErrorResponse } from '../interfaces/IErrorResponse';
import { useMutation } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { client } from './client';

export const useAuth = () => {
  const [error, setError] = useState<{ message: string }[]>();
  const [show, setShow] = useState(false);

  const { setUser } = useContext(AuthContext);

  const signin = async (input: FieldValues): Promise<void> => {
    try {
      const response = await authApi.login(input.email, input.password);
      const { data } = jwtDecode<IDecodeResponse>(response.data.token);
      tokenStorage.storeToken(response.data.token);
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        const serverError = error as AxiosError<IErrorResponse>;
        setError(serverError.response?.data.errors);
        setShow(true);
      } else {
        setError([{ message: 'Something went wrong please try later...' }]);
        setShow(true);
      }
    }
  };

  return { signin, error, show };
};
