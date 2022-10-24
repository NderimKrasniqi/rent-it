import { View, Text, Touchable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import AppIcon from './AppIcon';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface AppListItemProps {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  bgColor?: string;
  title: string;
  onPress: () => void;
}

const AppListItem = ({ icon, title, onPress, bgColor }: AppListItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="bg-white py-2 flex-row items-center my-1 rounded-lg">
        <AppIcon name={icon} bgColor={bgColor} />
        <Text className="text-lg font-bold">{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppListItem;
