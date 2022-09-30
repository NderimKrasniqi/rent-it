import { ImageBackground, View, Text } from 'react-native';
import React from 'react';
import AppButton from '../components/AppButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../navigator/AuthNavigator';
import colors from '../utils/colors';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'WelcomeScreen'>;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/welcome.jpg')}
      resizeMode="cover"
      className="flex-1 justify-between items-center"
    >
      <View className="flex-row items-center mt-[50%]">
        <Text className="text-secondary-900 text-5xl font-bold pt-3">RENT</Text>
        <View className="rounded-md overflow-hidden ml-1">
          <Text className="bg-secondary-900 text-primary-500 text-6xl font-extrabold pt-3 px-3">
            IT
          </Text>
        </View>
      </View>
      <View className="w-screen px-10 mb-24">
        <AppButton
          title="Login"
          bgColor={colors.primaryBg}
          tintColor={colors.primaryTint}
          onPress={() => navigation.navigate('LoginScreen')}
        />
        <AppButton
          title="Register"
          bgColor={colors.secondaryBg}
          tintColor={colors.secondaryTint}
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
