import {
  View,
  GestureResponderEvent,
  Pressable,
  PressableProps,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';
import React from 'react';

interface TabBarButtonProps extends PressableProps {
  onPress?: () => void;
}

const TabBarButton = ({ onPress, ...otherProps }: TabBarButtonProps) => {
  return (
    <Pressable onPress={onPress} {...otherProps}>
      <View className="bg-primary-500 justify-center items-center w-20 h-20 rounded-full bottom-4 border-8 border-white">
        <Ionicons name="camera-outline" size={25} color={colors.white} />
      </View>
    </Pressable>
  );
};

export default TabBarButton;
