import { useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './navigation.types';
import LoginScreen from '../screens/auth-screens/LoginScreen';
import RegisterScreen from '../screens/auth-screens/RegisterScreen';
import WelcomeScreen from '../screens/auth-screens/WelcomeScreen';

const Stack = createStackNavigator<AuthStackParamList>();

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
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
