import authApi from '../api/auth';
import tokenStorage from './storage';
import jwtDecode from 'jwt-decode';
import axios, { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import AuthContext from './context';
import { IDecodedToken } from '../interfaces/IDecodedToken';
import { ErrorMessage, IErrorResponse } from '../interfaces/IErrorResponse';
import { FieldValues } from 'react-hook-form';

export const useAuth = () => {
  const [errors, setErrors] = useState<ErrorMessage[]>();
  const [show, setShow] = useState(false);
  const { setUser } = useContext(AuthContext);

  const login = async (input: FieldValues): Promise<void> => {
    setShow(false);
    try {
      const response = await authApi.login(input.email, input.password);
      const token = response.data;
      await tokenStorage.storeToken(token);
      const { data } = jwtDecode<IDecodedToken>(token);
      setUser(data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const serverError = error as AxiosError<IErrorResponse>;
        setErrors(serverError.response?.data.errors);
        setShow(true);
      } else {
        setErrors([{ message: 'Something went wrong please try later...' }]);
        setShow(true);
      }
    }
  };
  const register = async (input: FieldValues): Promise<void> => {
    setShow(false);
    try {
      const response = await authApi.register(
        input.name,
        input.email,
        input.password
      );
      const user = response.data;
      const token = response.headers['x-auth-token'];
      await tokenStorage.storeToken(token);
      setUser(user);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        const serverError = error as AxiosError<IErrorResponse>;
        console.log(serverError.response?.data.errors);
        setErrors(serverError.response?.data.errors);
        setShow(true);
      } else {
        setErrors([{ message: 'Something went wrong please try later...' }]);
        setShow(true);
      }
    }
  };
  return { login, register, errors, show };
};
