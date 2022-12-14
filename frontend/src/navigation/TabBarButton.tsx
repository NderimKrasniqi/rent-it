import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';
import React from 'react';

interface TabBarButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
}

const TabBarButton = ({ onPress, ...otherProps }: TabBarButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} {...otherProps}>
      <View className="bg-primary-500 justify-center items-center w-20 h-20 rounded-full bottom-4 border-8 border-white">
        <Ionicons name="camera-outline" size={25} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};

export default TabBarButton;
