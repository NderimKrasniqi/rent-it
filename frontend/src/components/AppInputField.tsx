import { View, TextInput, TextInputProps } from 'react-native';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';
import AppInputErrorMessage from './AppInputErrorMessage';

interface InputFieldProps extends TextInputProps {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  iconSize?: number;
  iconColor?: string;
  iconPosition?: 'left' | 'right';
  name: string;
  control: Control;
  rules: RegisterOptions;
}

const AppInputField = ({
  icon,
  iconSize = 15,
  iconColor = colors.dark,
  iconPosition = 'left',
  control,
  name,
  rules,
  ...otherProps
}: InputFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            className={`${
              error ? 'bg-red-100' : 'bg-gray-100'
            } flex flex-row items-center w-full rounded-md my-2.5 p-2.5`}
          >
            {icon && iconPosition === 'left' && (
              <View className="mr-1">
                <Ionicons name={icon} size={20} color={iconColor} />
              </View>
            )}
            <TextInput
              className="h-8 flex-1 ml-1 text-base text-gray"
              value={value}
              placeholderTextColor={colors.gray}
              onChangeText={onChange}
              onBlur={onBlur}
              {...otherProps}
            />
            {icon && iconPosition === 'right' && (
              <View className="mr-1">
                <Ionicons name={icon} size={20} color={iconColor} />
              </View>
            )}
          </View>
          <AppInputErrorMessage error={error} />
        </>
      )}
    />
  );
};

export default AppInputField;
