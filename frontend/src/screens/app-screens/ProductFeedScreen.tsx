import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppCard from '../../components/AppCard';
import colors from '../../utils/colors';
import AppButton from '../../components/AppButton';
import React, { useContext } from 'react';
import AuthContext from '../../auth/context';
import tokenStorage from '../../auth/storage';
import AppView from '../../components/AppView';

const ProductFeedScreen = () => {
  const { setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    tokenStorage.removeToken();
    setUser(null);
  };
  return (
    <AppView className="flex-1 bg-light justify-center">
      <View className="px-5">
        <StatusBar animated={true} />
        <AppCard />
        <AppCard />
        <AppButton
          title="LogOut"
          color={'bg-primary-500'}
          onPress={() => handleLogOut()}
        />
      </View>
    </AppView>
  );
};

export default ProductFeedScreen;
