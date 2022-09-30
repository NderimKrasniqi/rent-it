import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigator/AuthNavigator';
import { myTheme } from './src/navigator/navigationTheme';

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      {<AuthNavigator />}
    </NavigationContainer>
  );
}
