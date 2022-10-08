import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import { IUser } from '../interfaces/IUser';
import tokenStorage from '../auth/storage';

export const useResources = () => {
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
        Asset.loadAsync([require('./../assets/welcome.jpg')]),
      ]);
    };

    restoreUser();
    prepareResources();
    SplashScreen.hideAsync();
  }, []);

  return { user, setUser, isReady, setIsReady };
};
