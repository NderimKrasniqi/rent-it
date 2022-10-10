import { SafeAreaView } from 'react-native';

interface AppViewProps extends React.ComponentProps<typeof SafeAreaView> {
  children: React.ReactNode;
}

const AppView: React.FunctionComponent<AppViewProps> = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => {
  return <SafeAreaView {...otherProps}>{children}</SafeAreaView>;
};

export default AppView;
