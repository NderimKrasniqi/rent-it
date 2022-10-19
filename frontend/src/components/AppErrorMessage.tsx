import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import AppText from './AppText';
import { IErrorResponse } from '../interfaces/IErrorResponse';

const AppErrorMessage = ({ errors }: IErrorResponse) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!alert) {
    return null;
  }
  return (
    <View className="flex flex-row h-14 bg-red-200 items-center w-full rounded-md p-2.5">
      <View className="mr-2">
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={20}
          color={colors.danger}
        />
      </View>
      <View className="flex">
        <AppText className="text-danger font-bold">{'Error'}</AppText>
        <AppText className="text-danger">
          {errors?.map((err) => err.message)}
        </AppText>
      </View>
    </View>
  );
};

export default AppErrorMessage;
