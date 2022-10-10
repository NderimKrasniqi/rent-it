import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import AppText from './AppText';

interface ErrorMessageProp {
  error:
    | Array<{
        message: string;
      }>
    | undefined;
}
const AppErrorMessage: React.FC<ErrorMessageProp> = ({ error }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    // To clear or cancel a timer, you call the clearTimeout(); method,
    // passing in the timer object that you created into clearTimeout().
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
          {error?.map((err) => err.message)}
        </AppText>
      </View>
    </View>
  );
};

export default AppErrorMessage;
