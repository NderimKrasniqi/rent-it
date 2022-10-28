import { View, Image } from 'react-native';
import React from 'react';
import AppText from './AppText';

interface AppAvatarProps {
  image?: string;
  name: string | undefined;
  email: string | undefined;
}

const AppAvatar = ({ image, name, email }: AppAvatarProps) => {
  return (
    <View className="flex-1 w-full justify-center items-center space-y-2 overflow-hidden">
      <Image
        className="w-36 h-36 rounded-full"
        source={require('../assets/avatar.png')}
      />
      <AppText className="text-xl text-dark font-bold ">{name}</AppText>
      <AppText className="text-sm text-text">{email}</AppText>
    </View>
  );
};

export default AppAvatar;
