import { View, Text, Image } from 'react-native';
import React from 'react';
import AppText from './AppText';

const AppAvatar = () => {
  return (
    <View className="flex-1 w-full justify-center items-center space-y-2 overflow-hidden">
      <Image
        className="w-36 h-36 rounded-full"
        source={require('../assets/avatar.png')}
      />
      <AppText className="text-xl text-dark font-bold ">
        Nderim Krasniqi
      </AppText>
      <AppText className="text-sm text-text">Nderim.k1@gmail.com</AppText>
    </View>
  );
};

export default AppAvatar;
