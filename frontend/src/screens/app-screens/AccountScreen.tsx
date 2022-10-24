import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import AuthContext from '../../auth/context';
import tokenStorage from '../../auth/storage';
import AppAvatar from '../../components/AppAvatar';
import AppButton from '../../components/AppButton';
import AppListItem from '../../components/AppListItem';
import AppView from '../../components/AppScreen';
import { AccountListData, listData } from '../../utils/accountListData';

const AccountScreen = () => {
  const { setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    tokenStorage.removeToken();
    setUser(null);
  };
  return (
    <AppView className="flex-1 bg-light justify-center px-5">
      <View className="justify-center items-center h-2/5">
        <AppAvatar />
      </View>
      <View className="flex h-3/5 mb-6">
        <FlatList<AccountListData>
          data={listData}
          renderItem={({ item }) => (
            <AppListItem
              icon={item.icon}
              title={item.title}
              bgColor={item.bgColor}
              onPress={() => console.log('Hello')}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
        <AppButton title="Log Out" color="bg-primary-500" />
      </View>
    </AppView>
  );
};

export default AccountScreen;
