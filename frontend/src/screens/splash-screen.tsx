import { View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <View className="flex-1 mb-25">
      <LottieView
        source={require('../assets/splash-screen.json')}
        autoPlay
        loop={false}
        resizeMode="contain"
        onAnimationFinish={() => console.log('done')}
      />
    </View>
  );
};

export default Splash;
