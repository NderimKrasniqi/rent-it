import { View } from 'react-native';

interface AppScreenProps extends React.ComponentProps<typeof View> {
  children: React.ReactNode;
}

const AppScreen: React.FC<AppScreenProps> = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => {
  return (
    <View className="pt-10 px-5" {...otherProps}>
      {children}
    </View>
  );
};

export default AppScreen;
