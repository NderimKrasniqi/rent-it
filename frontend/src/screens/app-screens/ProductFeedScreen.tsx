import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppCard from '../../components/AppCard';
import colors from '../../utils/colors';
import AppButton from '../../components/AppButton';
import { useContext } from 'react';
import AuthContext from '../../auth/context';

const ProductFeedScreen = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center mx-10">
      <StatusBar animated={true} />
      <AppCard />
      <AppButton
        title="LogOut"
        color={'bg-primary-500'}
        onPress={() => handleLogOut()}
      />
    </SafeAreaView>
  );
};

export default ProductFeedScreen;
