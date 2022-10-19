import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/app-screens/AccountScreen';
import ProductEditScreen from '../screens/app-screens/ProductEditScreen';
import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TabBarButton from './TabBarButton';

export type TabParamList = {
  FeedNavigator: undefined;
  ProductEditScreen: undefined;
  AccountScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedNavigator"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="FeedNavigator"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ProductEditScreen"
        component={ProductEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabBarButton
              onPress={() => navigation.navigate('ProductEditScreen')}
            />
          ),
        })}
      />

      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
