import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContext from './src/auth/context';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import { myTheme } from './src/navigation/navigationTheme';
import { useResources } from './src/hooks/useResources';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function App() {
  const { user, setUser, isReady, setIsReady } = useResources();

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
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={myTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
