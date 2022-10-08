import { View, TextInput, TextInputProps } from 'react-native';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import AppInputErrorMessage from './AppInputErrorMessage';

interface InputFieldProps extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  name: string;
  control: Control;
  rules: RegisterOptions;
}

const AppInputField: React.FC<InputFieldProps> = ({
  icon,
  control,
  name,
  rules,
  ...otherProps
}) => {
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
            {icon && (
              <View className="mr-2.5">
                <MaterialCommunityIcons
                  name={icon}
                  size={20}
                  color={colors.primaryTint}
                />
              </View>
            )}
            <TextInput
              className="h-8 flex-1 text-lg text-dark"
              value={value}
              placeholderTextColor={colors.medium}
              onChangeText={onChange}
              onBlur={onBlur}
              {...otherProps}
            />
          </View>
          <AppInputErrorMessage error={error} />
        </>
      )}
    />
  );
};

export default AppInputField;
