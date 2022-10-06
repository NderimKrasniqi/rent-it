import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import AuthContext from '../../auth/context';
import AppButton from '../../components/AppButton';

const ProductFeedScreen = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <View>
      <AppButton
        title="LogOut"
        color="bg-secondary-900"
        onPress={() => setUser(null)}
      />
    </View>
  );
};

export default ProductFeedScreen;
