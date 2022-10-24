import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface AppIconProps {
  size?: number;
  name: React.ComponentProps<typeof Ionicons>['name'];
  bgColor?: string;
  IconColor?: string;
}

const AppIcon = ({
  size = 50,
  name = 'ios-person',
  bgColor = 'black',
  IconColor = 'white',
}: AppIconProps) => {
  console.log(`bg-[${bgColor}]`);
  return (
    <View
      style={{ backgroundColor: bgColor, width: size, height: size }}
      className="rounded-full justify-center items-center ml-2 mr-4"
    >
      <Ionicons name={name} size={size * 0.5} color={IconColor} />
    </View>
  );
};

export default AppIcon;
