import { useWindowDimensions } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductFeedScreen from '../screens/app-screens/ProductFeedScreen';
import ProductDetailScreen from '../screens/app-screens/ProductDetailScreen';
import { FeedStackParamsList } from './navigation.types';

const Stack = createStackNavigator<FeedStackParamsList>();

const FeedNavigator = () => {
  const { width } = useWindowDimensions();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureResponseDistance: width / 2 }}>
      <Stack.Screen name="ProductFeedScreen" component={ProductFeedScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
