import { View, Text } from 'react-native';
import React from 'react';

const AppLoginText = () => {
  return (
    <View className="justify-center items-center my-16">
      <Text className="text-3xl text-primary-500 font-semibold mb-6">
        Hello Again!
      </Text>
      <Text className="text-xl text-medium">Welcome back you've</Text>
      <Text className="text-xl text-medium">been missed!</Text>
    </View>
  );
};

export default AppLoginText;
