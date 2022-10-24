import React from 'react';
import {
  Animated,
  Pressable,
  Text,
  TouchableHighlightProps,
  View,
} from 'react-native';
import { useBounceAnimation } from '../hooks/useBounceAnimation';

interface AppButtonProps extends TouchableHighlightProps {
  title: string;
  color: 'bg-primary-500' | 'bg-secondary-900';
}

const AppButton = ({ title, color, ...otherProps }: AppButtonProps) => {
  const { pressIn, pressOut, animatedStyle } = useBounceAnimation();
  return (
    <Pressable onPressIn={pressIn} onPressOut={pressOut} {...otherProps}>
      <Animated.View
        className={`bg-medium w-full rounded-lg p-3.5 my-2 ${color}`}
        style={animatedStyle}
      >
        <Text className="text-light text-center text-lg font-bold uppercase">
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default AppButton;
