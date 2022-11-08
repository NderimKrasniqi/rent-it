import { useWindowDimensions } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/account-screens/AccountScreen';
import ProductListScreen from '../screens/account-screens/ProductListScreen';
import MessageListScreen from '../screens/account-screens/MessageListScreen';
import ProfileScreen from '../screens/account-screens/ProfileScreen';
import { AccountStackParamsList } from './navigation.types';

const Stack = createStackNavigator<AccountStackParamsList>();

const AccountNavigator = () => {
  const { width } = useWindowDimensions();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureResponseDistance: width / 2 }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      <Stack.Screen name="MessageListScreen" component={MessageListScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
