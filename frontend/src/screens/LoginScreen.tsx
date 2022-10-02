import { View, Text } from 'react-native';
import React from 'react';
import AppLoginForm from '../components/AppLoginForm';
import AppLoginText from '../components/AppLoginText';

const LoginScreen: React.FC = () => {
  return (
    <View className="flex-1 items-center px-10">
      <AppLoginText />
      <AppLoginForm />
    </View>
  );
};

export default LoginScreen;
