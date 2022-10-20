import { View } from 'react-native';
import Constants from 'expo-constants';
interface AppViewProps extends React.ComponentProps<typeof View> {
  children: React.ReactNode;
}

const AppView = ({ children, ...otherProps }: AppViewProps) => {
  const { statusBarHeight } = Constants;
  return (
    <View className={`pt-[${statusBarHeight}px] px-10`} {...otherProps}>
      {children}
    </View>
  );
};

export default AppView;
