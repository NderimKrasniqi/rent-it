import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductFeedScreen from '../screens/app-screens/ProductFeedScreen';
import ProductDetailScreen from '../screens/app-screens/ProductDetailScreen';

const Stack = createStackNavigator();

export type StackParamList = {
  ProductFeedScreen: undefined;
  ProductDetailScreen: undefined;
};

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductFeedScreen" component={ProductFeedScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
