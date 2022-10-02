import { View, Text } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import colors from '../utils/colors';
import AppButton from './AppButton';
import AppInputField from './AppInputField';

const AppLoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log('ERRORS: ', errors);
  const OnLoginPressed = (data: object) => {
    console.log(data);
  };
  return (
    <>
      <View className="w-full">
        <AppInputField
          icon="email-outline"
          name="email"
          placeholder="Email"
          control={control}
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
        <Text className="text-right text-xs text-blue-500 font-semibold mb-4">
          Forgot password?
        </Text>
      </View>
      <AppButton
        color="bg-primary-500"
        underlayColor={colors.primaryTint}
        title="Login"
        onPress={handleSubmit(OnLoginPressed)}
      />
    </>
  );
};

export default AppLoginForm;
