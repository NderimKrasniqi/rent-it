import { useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth-screens/LoginScreen';
import RegisterScreen from '../screens/auth-screens/RegisterScreen';
import WelcomeScreen from '../screens/auth-screens/WelcomeScreen';

const Stack = createStackNavigator<AuthParamList>();

export type AuthParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const AuthNavigator = () => {
  const { width } = useWindowDimensions();
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerTitle: '',
        gestureResponseDistance: width / 2,
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
