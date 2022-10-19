import { View, Text } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FeedStackParamsList } from '../../navigator/FeedNavigator';

type ProductDetailScreenProps = StackScreenProps<
  FeedStackParamsList,
  'ProductDetailScreen'
>;
const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const { item } = route.params;
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{item.title}</Text>
    </View>
  );
};

export default ProductDetailScreen;
