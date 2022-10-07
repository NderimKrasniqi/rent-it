import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import AuthContext from '../../auth/context';
import AppButton from '../../components/AppButton';
import tokenStorage from '../../auth/storage';
const ProductFeedScreen = () => {
  const logout = () => {
    setUser(null);
    tokenStorage.removeToken();
  };

  const { setUser } = useContext(AuthContext);
  return (
    <View>
      <AppButton
        title="LogOut"
        color="bg-secondary-900"
        onPress={() => logout()}
      />
    </View>
  );
};

export default ProductFeedScreen;
