import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { FlatList, View, Text } from 'react-native';
import AuthContext from '../../auth/context';
import tokenStorage from '../../auth/storage';
import AppAvatar from '../../components/AppAvatar';
import AppButton from '../../components/AppButton';
import AppListItem from '../../components/AppListItem';
import AppView from '../../components/AppScreen';
import { useUser } from '../../hooks/useUser';
import { AccountListData, listData } from '../../utils/accountListData';

const AccountScreen = () => {
  const { data, error, isError } = useUser();
  const { setUser } = useContext(AuthContext);
  const handleLogOut = async () => {
    tokenStorage.removeToken();
    setUser(null);
  };
  return (
    <AppView className="flex-1 bg-light justify-center px-5">
      <View className="justify-center items-center h-2/5">
        <AppAvatar name={data?.name} email={data?.email} />
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
        <AppButton
          title="Log Out"
          color="bg-primary-500"
          onPress={handleLogOut}
        />
      </View>
    </AppView>
  );
};

export default AccountScreen;
