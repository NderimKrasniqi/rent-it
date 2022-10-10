import { View, Text } from 'react-native';
import React from 'react';
import AppText from './AppText';

const AppLoginText = () => {
  return (
    <View className="flex items-center py-4">
      <AppText className=" text-xl text-dark font-semibold my-4">
        Hello Again!
      </AppText>
      <AppText className="text-base">Welcome back you've</AppText>
      <AppText className="text-base">been missed!</AppText>
    </View>
  );
};

export default AppLoginText;
