import { View, Text, Image } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../utils/colors';

interface AppCardProps {
  title: string;
  subTitle: string;
  image: string;
  price: number;
  city: string;
}

const AppCard: React.FC = () => {
  return (
    <View className="flex rounded-md bg-white overflow-hidden p-4 space-y-4 my-2">
      <Image
        className="w-full h-48"
        source={require('../assets/Traktor.jpg')}
        resizeMode="cover"
      />
      <View className="flex space-y-4">
        <View className="flex-row justify-between">
          <AppText className="font-bold text-primary-500">Head Phones</AppText>
          <AppText
            className="text-dark"
            icon="location-outline"
            iconColor={colors.primary}
            iconSize={15}
          >
            New York
          </AppText>
        </View>
        <View className="flex-row justify-between items-center">
          <AppText className="text-dark font-semibold">100$</AppText>
        </View>
      </View>
    </View>
  );
};

export default AppCard;
