import { View } from 'react-native';

interface AppViewProps extends React.ComponentProps<typeof View> {
  children: React.ReactNode;
}

const AppView = ({ children, ...otherProps }: AppViewProps) => {
  return (
    <View className="pt-10 px-10" {...otherProps}>
      {children}
    </View>
  );
};

export default AppView;
