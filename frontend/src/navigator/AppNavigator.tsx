import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/app-screens/AccountScreen';
import ProductEditScreen from '../screens/app-screens/ProductEditScreen';
import FeedNavigator from './FeedNavigator';
const Tab = createBottomTabNavigator();

export type TabParamList = {
  FeedScreen: undefined;
  ProductEditScreen: undefined;
  AccountScreen: undefined;
};

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FeedNavigator" component={FeedNavigator} />
      <Tab.Screen name="ProductEditScreen" component={ProductEditScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
