import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AppInputField from '../components/AppInputField';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View className="flex-1 items-center justify-center px-8 mb-36">
      <AppInputField
        icon="email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoFocus
      />
      <AppInputField
        icon="lock"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
    </View>
  );
};

export default LoginScreen;
