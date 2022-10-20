import { useRef } from 'react';
import { Animated } from 'react-native';

export const useBounceAnimation = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.9,
      useNativeDriver: false,
    }).start();
  };

  const pressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 30,
      useNativeDriver: false,
    }).start();
  };
  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return { pressIn, pressOut, animatedStyle };
};
