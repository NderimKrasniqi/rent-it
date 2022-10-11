import { View } from 'react-native';

interface AppViewProps extends React.ComponentProps<typeof View> {
  children: React.ReactNode;
}

const AppView: React.FC<AppViewProps> = ({ children, ...otherProps }) => {
  return (
    <View className="pt-10 px-5" {...otherProps}>
      {children}
    </View>
  );
};

export default AppView;