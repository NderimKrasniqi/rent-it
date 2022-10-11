import React from 'react';
import { Text, TextProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AppTextProps extends TextProps {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  iconSize?: number;
  iconColor?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

const AppText = ({
  icon,
  iconSize = 15,
  iconColor,
  iconPosition = 'left',
  children,
  ...otherProps
}: AppTextProps) => {
  return (
    <View className="flex flex-row items-center">
      {icon && iconPosition === 'left' && (
        <View className="mr-1">
          <Ionicons name={icon} size={iconSize} color={iconColor} />
        </View>
      )}
      <Text className="text-medium text-sm" {...otherProps}>
        {children}
      </Text>
      {icon && iconPosition === 'right' && (
        <View className="ml-1">
          <Ionicons name={icon} size={iconSize} color={iconColor} />
        </View>
      )}
    </View>
  );
};

export default AppText;
