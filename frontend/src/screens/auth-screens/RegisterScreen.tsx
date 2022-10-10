import { View } from 'react-native';
import { FieldValues, useForm } from 'react-hook-form';
import AppInputField from '../../components/AppInputField';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors';
import AppErrorMessage from '../../components/AppErrorMessage';
import { useAuth } from '../../auth/useAuth';
import AppRegisterText from '../../components/AppRegisterText';
import AppView from '../../components/AppView';

const RegisterScreen: React.FC = () => {
  const { control, handleSubmit, watch } = useForm();
  const isPassword = watch('password');
  const { register, show, error } = useAuth();

  const OnRegisterPressed = async (input: FieldValues) => {
    register(input);
  };

  return (
    <AppView className="flex-1 justify-start items-center mx-10">
      <AppRegisterText />
      <View className="h-14 w-full">
        {show && <AppErrorMessage error={error} />}
      </View>
      <AppInputField
        icon="person-outline"
        name="name"
        placeholder="Name"
        control={control}
        rules={{
          required: 'Name is required',
          pattern: {
            value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            message: 'Please enter a valid name',
          },
        }}
      />
      <AppInputField
        icon="at"
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
        icon="lock-open-outline"
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
        icon="lock-closed-outline"
        placeholder="Confirm Password"
        control={control}
        secureTextEntry={true}
        rules={{
          validate: (value) => value === isPassword || 'Passwords do not match',
        }}
      />
      <View className="w-full">
        <AppButton
          color="bg-primary-500"
          underlayColor={colors.primaryTint}
          title="Register"
          onPress={handleSubmit(OnRegisterPressed)}
        />
      </View>
    </AppView>
  );
};
export default RegisterScreen;
