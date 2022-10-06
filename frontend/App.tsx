import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthContext from './src/auth/context';
import AuthNavigator from './src/navigator/AuthNavigator';
import AppNavigator from './src/navigator/AppNavigator';
import { myTheme } from './src/navigator/navigationTheme';
import tokenStorage from './src/auth/storage';
import * as SplashScreen from 'expo-splash-screen';
import { IUser } from './src/interfaces/IUser';
import { Asset } from 'expo-asset';

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);
export default function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await tokenStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    const prepareResources = async () => {
      await Promise.all([
        Asset.loadAsync([require('./src/assets/welcome.jpg')]),
      ]);
      await restoreUser();
      setIsReady(true);
    };

    prepareResources();
    SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={myTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
