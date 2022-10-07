import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContext from './src/auth/context';
import AuthNavigator from './src/navigator/AuthNavigator';
import AppNavigator from './src/navigator/AppNavigator';
import { myTheme } from './src/navigator/navigationTheme';
import tokenStorage from './src/auth/storage';
import * as SplashScreen from 'expo-splash-screen';
import { IUser } from './src/interfaces/IUser';
import { Asset } from 'expo-asset';
import LottieView from 'lottie-react-native';

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);

const queryClient = new QueryClient();

export default function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await tokenStorage.getUser();
    if (user) {
      console.log(user);
      setUser(user);
    }
  };

  useEffect(() => {
    const prepareResources = async () => {
      await Promise.all([
        Asset.loadAsync([require('./src/assets/welcome.jpg')]),
      ]);
    };

    restoreUser();
    prepareResources();
    SplashScreen.hideAsync();
  }, []);

  if (!isReady) {
    return (
      <LottieView
        source={require('./src/assets/splash-screen.json')}
        autoPlay
        loop={false}
        resizeMode="contain"
        onAnimationFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={myTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}
