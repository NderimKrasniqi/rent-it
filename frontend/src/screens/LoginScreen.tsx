import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AppInputField from '../components/AppInputField';
import AppButton from '../components/AppButton';
import colors from '../utils/colors';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View className="flex-1 items-center px-10">
      <View className="justify-center items-center my-20">
        <Text className="text-4xl text-primary-500 font-semibold mb-6">
          Hello Again!
        </Text>
        <Text className="text-xl text-medium">Welcome back you've</Text>
        <Text className="text-xl text-medium">been missed!</Text>
      </View>
      <View className="w-full">
        <AppInputField
          icon="email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <AppInputField
          icon="lock"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text className="text-right text-xs text-red-400 font-semibold mb-4">
          Forgot password?
        </Text>
      </View>
      <AppButton
        color={colors.primaryBg}
        underlayColor={colors.primaryTint}
        title="Login"
        onPress={() => console.log('logging in :D')}
      />
    </View>
  );
};

export default LoginScreen;
