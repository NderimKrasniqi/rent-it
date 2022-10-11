import { View, Text, Image } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../utils/colors';

export interface AppCardProps {
  title: string;
  image: string;
  price: string;
  city: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, image, price, city }) => {
  return (
    <View className="flex rounded-lg bg-white overflow-hidden p-4 space-y-4 my-2">
      <Image
        className="w-full h-48 rounded-lg"
        source={{ uri: image }}
        resizeMode="cover"
      />
      <View className="flex space-y-4">
        <View className="flex-row justify-between">
          <AppText className="font-bold text-primary-500">{title}</AppText>
          <AppText
            className="text-dark"
            icon="location-outline"
            iconColor={colors.primary}
            iconSize={15}
          >
            {city}
          </AppText>
        </View>
        <View className="flex-row justify-between items-center">
          <AppText className="text-dark font-semibold">{`${price}$`}</AppText>
        </View>
      </View>
    </View>
  );
};

export default AppCard;
