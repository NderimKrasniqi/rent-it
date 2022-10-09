import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductFeedScreen from '../screens/app-screens/ProductFeedScreen';
import ProductDetailScreen from '../screens/app-screens/ProductDetailScreen';

export type StackParamList = {
  ProductFeedScreen: undefined;
  ProductDetailScreen: undefined;
};
const Stack = createStackNavigator<StackParamList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductFeedScreen" component={ProductFeedScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
