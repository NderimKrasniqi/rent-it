import { View, Text } from 'react-native';
import React from 'react';
import { ProductDetailScreenProps } from '../AppNavigator.types';

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { item } = route.params;
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{item.title}</Text>
    </View>
  );
};

export default ProductDetailScreen;
