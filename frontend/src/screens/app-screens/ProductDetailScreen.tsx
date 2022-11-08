import { View, Text } from 'react-native';
import React from 'react';
import { FeedStackProps } from '../../navigation/navigation.types';

const ProductDetailScreen = ({ route }: FeedStackProps<'ProductDetailScreen'>) => {
  const { item } = route.params;
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{item.title}</Text>
    </View>
  );
};

export default ProductDetailScreen;
