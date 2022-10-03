import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

interface ErrorProps {
  error: FieldError | undefined;
}
const AppErrorMessage: React.FC<ErrorProps> = ({ error }) => {
  if (!error) {
    return null;
  }
  return <Text className=" text-red-500 text-sm ">{error.message}</Text>;
};

export default AppErrorMessage;
