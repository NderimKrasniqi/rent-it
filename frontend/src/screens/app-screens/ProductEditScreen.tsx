import { View, Text, Image } from 'react-native';
import React from 'react';
import AppView from '../../components/AppScreen';
import AppImagePicker from '../../components/AppImagePicker';

const ProductEditScreen = () => {
  return (
    <AppView className="flex-1 bg-light px-5">
      <View className="border border-red-500 flex h-1/4">
        <AppImagePicker />
      </View>
      <View className="border border-green-500 flex h-3/4"></View>
    </AppView>
  );
};

export default ProductEditScreen;
