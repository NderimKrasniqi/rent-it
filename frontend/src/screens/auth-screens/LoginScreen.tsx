import { View, SafeAreaView, StatusBar } from 'react-native';
import AppLoginText from '../../components/AppLoginText';
import { FieldValues, useForm } from 'react-hook-form';
import AppInputField from '../../components/AppInputField';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';
import AppErrorMessage from '../../components/AppErrorMessage';
import { useAuth } from '../../auth/useAuth';
import AppText from '../../components/AppText';
import AppScreen from '../../components/AppScreen';
import AppFormInput from '../../components/AppFormInput';

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { login, show, error } = useAuth();

  const OnLoginPressed = async (input: FieldValues) => {
    login(input);
  };

  return (
    <AppScreen className="flex-1 items-center">
      <AppLoginText />
      <View className="w-full">
        <View className="h-14">
          {show && <AppErrorMessage error={error} />}
        </View>
        <AppFormInput
          icon="at"
          name="email"
          placeholder="Email@adress.com"
          control={control}
          keyboardType={'email-address'}
          rules={{
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          }}
        />
        <AppFormInput
          icon="lock-closed-outline"
          name="password"
          placeholder="Minimum of 6 characters"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Password should be maximum 24 characters long',
            },
          }}
        />
        <AppText className="w-full text-right text-xs text-blue-500 font-semibold my-2">
          Forgot password?
        </AppText>
      </View>
      <AppButton
        color="bg-primary-500"
        underlayColor={colors.primaryTint}
        title="Login"
        onPress={handleSubmit(OnLoginPressed)}
      />
    </AppScreen>
  );
};

export default LoginScreen;
