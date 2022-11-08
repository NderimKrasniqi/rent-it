import { ImageBackground, View } from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import AppLogo from '../../components/AppLogo';
import AppButton from '../../components/AppButton';
import { AuthStackScreenProps } from '../../navigation/navigation.types';

const WelcomeScreen = ({ navigation }: AuthStackScreenProps<'WelcomeScreen'>) => {
  return (
    <ImageBackground
      source={require('../../assets/welcome.jpg')}
      resizeMode="cover"
      className="flex-1 justify-between items-center"
    >
      <AppLogo />

      <View className="w-full px-10 mb-24">
        <AppButton
          title="Login"
          color="bg-primary-500"
          underlayColor={colors.primaryTint}
          onPress={() => navigation.navigate('LoginScreen')}
        />
        <AppButton
          title="Register"
          color="bg-secondary-900"
          underlayColor={colors.secondaryTint}
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
