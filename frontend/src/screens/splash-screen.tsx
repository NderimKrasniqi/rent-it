import { View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <View className="flex-1 bg-primary-500 h-full w-full">
      <LottieView
        source={require('../assets/splash-screen.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => console.log('done')}
      />
    </View>
  );
};

export default Splash;
