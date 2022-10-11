import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import AuthContext from '../../auth/context';
import tokenStorage from '../../auth/storage';
import AppButton from '../../components/AppButton';
import AppView from '../../components/AppScreen';

const AccountScreen = () => {
  const { setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    tokenStorage.removeToken();
    setUser(null);
  };
  return (
    <AppView className="flex-1 bg-light justify-center">
      <AppButton
        title="LogOut"
        color={'bg-primary-500'}
        onPress={() => handleLogOut()}
      />
    </AppView>
  );
};

export default AccountScreen;
