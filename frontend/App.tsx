import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AuthContext from './src/auth/context';
import AuthNavigator from './src/navigator/AuthNavigator';
import AppNavigator from './src/navigator/AppNavigator';
import { myTheme } from './src/navigator/navigationTheme';
import RegisterScreen from './src/screens/auth-screens/RegisterScreen';

export default function App() {
  const [user, setUser] = useState();
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={myTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
