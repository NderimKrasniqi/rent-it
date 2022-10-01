import { View, Text } from 'react-native';
import React from 'react';

const AppLogo = () => {
  return (
    <View className="flex-row items-center mt-[50%]">
      <Text className="text-secondary-900 text-5xl font-bold pt-3">RENT</Text>
      <View className="rounded-md overflow-hidden ml-1">
        <Text className="bg-secondary-900 text-primary-500 text-6xl font-extrabold pt-3 px-3">
          IT
        </Text>
      </View>
    </View>
  );
};

export default AppLogo;
