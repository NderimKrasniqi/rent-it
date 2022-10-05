import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import AppLoginText from '../../components/AppLoginText';
import { FieldValues, useForm } from 'react-hook-form';
import AuthContext from '../../auth/context';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import AppInputField from '../../components/AppInputField';
import AppButton from '../../components/AppButton';
import authApi from '../../api/auth';
import colors from '../../utils/colors';
import { isAxiosError } from '../../utils/axios-errors';
import { IErrorResponse } from '../../interfaces/IErrorResponse';
import AppErrorMessage from '../../components/AppErrorMessage';
import axios, { AxiosError } from 'axios';

const LoginScreen: React.FC = () => {
  const [error, setError] = useState<{ message: string }[]>();
  const [show, setShow] = useState(false);

  const { control, handleSubmit } = useForm();
  const { setUser } = useContext(AuthContext);

  const OnLoginPressed = async (data: FieldValues) => {
    setShow(false);
    const { email, password } = data;
    try {
      const response = await authApi.login({ email, password });
      const user = jwtDecode<JwtPayload>(response.data.token);
      setUser(user);
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

  return (
    <View className="flex-1 items-center px-10">
      <AppLoginText />
      {show && <AppErrorMessage error={error} />}
      <View className="w-full">
        <AppInputField
          icon="email-outline"
          name="email"
          placeholder="Email"
          control={control}
          keyboardType={'email-address'}
          rules={{
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          }}
        />
        <AppInputField
          name="password"
          icon="lock-outline"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 6 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Password should be maximum 24 characters long',
            },
          }}
        />
        <Text className="text-right text-xs text-blue-500 font-semibold my-2">
          Forgot password?
        </Text>
      </View>
      <AppButton
        color="bg-primary-500"
        underlayColor={colors.primaryTint}
        title="Login"
        onPress={handleSubmit(OnLoginPressed)}
      />
    </View>
  );
};

export default LoginScreen;
