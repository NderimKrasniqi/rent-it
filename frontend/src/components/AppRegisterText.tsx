import { View } from 'react-native';
import React from 'react';
import AppText from './AppText';

const AppRegisterText = () => {
  return (
    <View className="flex items-center py-4">
      <AppText className="text-dark text-xl font-bold py-4">Register</AppText>
      <AppText className="text-medium text-base">
        Create your new account, we are
      </AppText>
      <AppText className="text-medium text-base">
        glad that you joined us
      </AppText>
    </View>
  );
};

export default AppRegisterText;
