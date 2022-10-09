import { View, Text, Image } from 'react-native';
import React from 'react';

interface AppCardProps {
  title: string;
  subTitle: string;
  image: string;
  price: number;
  city: string;
}

const AppCard: React.FC = () => {
  return (
    <View className="flex rounded-lg border border-gray-200">
      <Image
        className="w-full h-48 rounded-t-lg"
        source={require('../assets/product.jpg')}
        resizeMode="cover"
      />
      <Text>AppCard</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit possimus ipsam vel nostrum labore id quibusdam nobis ipsum
      </Text>
      <View className="flex-row justify-between items-center">
        <Text>Price: $100</Text>
        <Text>City: New York</Text>
      </View>
    </View>
  );
};

export default AppCard;
