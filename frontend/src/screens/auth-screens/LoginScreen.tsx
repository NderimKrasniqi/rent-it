import { View, Text } from 'react-native';
import AppLoginText from '../../components/AppLoginText';
import { FieldValues, useForm } from 'react-hook-form';
import AppInputField from '../../components/AppInputField';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';
import AppErrorMessage from '../../components/AppErrorMessage';
import { useAuth } from '../../auth/useAuth';

const LoginScreen: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { login, show, error } = useAuth();

  const OnLoginPressed = async (input: FieldValues) => {
    login(input);
  };

  return (
    <View className="flex-1 items-center mx-10">
      <AppLoginText />
      {show && <AppErrorMessage error={error} />}
      <View className="w-full">
        <AppInputField
          icon="email-outline"
          name="email"
          placeholder="Email"
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
        <AppInputField
          name="password"
          icon="lock-outline"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 6 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Password should be maximum 24 characters long',
            },
          }}
        />
        <Text className="text-right text-xs text-blue-500 font-semibold my-2">
          Forgot password?
        </Text>
      </View>
      <AppButton
        color="bg-primary-500"
        underlayColor={colors.primaryTint}
        title="Login"
        onPress={handleSubmit(OnLoginPressed)}
      />
    </View>
  );
};

export default LoginScreen;
