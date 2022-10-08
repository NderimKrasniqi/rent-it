import { View, Text, SafeAreaView } from 'react-native';
import AppLoginText from '../../components/AppLoginText';
import { FieldValues, useForm } from 'react-hook-form';
import AppInputField from '../../components/AppInputField';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';
import AppErrorMessage from '../../components/AppErrorMessage';
import { useAuth } from '../../auth/useAuth';

const RegisterScreen: React.FC = () => {
  const { control, handleSubmit, watch } = useForm();
  const isPassword = watch('password');
  const { register, show, error } = useAuth();

  const OnRegisterPressed = async (input: FieldValues) => {
    register(input);
  };

  return (
    <SafeAreaView className="flex justify-start items-center mx-10">
      <View className="flex items-center py-4">
        <Text className="text-primary-500 text-3xl font-bold py-4">
          Register
        </Text>
        <Text className="text-primary-500 text-base">
          Create your new account, we are
        </Text>
        <Text className="text-primary-500 text-base">
          glad that you joined us
        </Text>
      </View>
      <View className="py-2">
        <AppInputField
          icon="account-outline"
          name="name"
          placeholder="Name"
          control={control}
          rules={{}}
        />
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
        <AppInputField
          name="confirmPassword"
          icon="lock-outline"
          placeholder="Confirm Password"
          control={control}
          secureTextEntry={true}
          rules={{
            validate: (value) =>
              value === isPassword || 'Passwords do not match',
          }}
        />
      </View>
      <View className="w-full">
        <AppButton
          color="bg-primary-500"
          underlayColor={colors.primaryTint}
          title="Register"
          onPress={handleSubmit(OnRegisterPressed)}
        />
      </View>
      {show && <AppErrorMessage error={error} />}
    </SafeAreaView>
  );
};
export default RegisterScreen;
