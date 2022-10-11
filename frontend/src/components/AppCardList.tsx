import React from 'react';
import { FlatList, StyleSheet, View, FlatListProps } from 'react-native';
import AppCard, { AppCardProps } from './AppCard';

interface AppCardListProps {
  data: AppCardProps[];
}
const AppCardList = ({ data }: AppCardListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <AppCard {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AppCardList;
