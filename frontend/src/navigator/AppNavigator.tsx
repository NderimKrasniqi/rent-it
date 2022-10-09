import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/app-screens/AccountScreen';
import ProductEditScreen from '../screens/app-screens/ProductEditScreen';
import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TabParamList>();

export type TabParamList = {
  FeedNavigator: undefined;
  ProductEditScreen: undefined;
  AccountScreen: undefined;
};

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="FeedNavigator"
        component={FeedNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} />,
        }}
      />

      <Tab.Screen
        name="ProductEditScreen"
        component={ProductEditScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus-circle" size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
