import { View, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import AppText from './AppText';
import colors from '../utils/colors';

export interface AppCardProps {
  id: number;
  title: string;
  image: string;
  price: string;
  city: string;
}

const AppCard = ({ title, image, price, city }: AppCardProps) => {
  const [isLoading, setLoading] = useState(true);
  console.log(image);
  return (
    <View className="flex rounded-lg bg-white overflow-hidden p-4 space-y-4 my-2">
      <View className="flex items-center justify-between">
        <Image
          className="w-full h-48 rounded-lg"
          source={{ uri: image }}
          resizeMode="cover"
          onLoad={() => setLoading(false)}
        />
        <ActivityIndicator
          className="absolute top-0 left-0 right-0 bottom-0"
          size="large"
          color={colors.primary}
          animating={isLoading}
        />
      </View>
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
