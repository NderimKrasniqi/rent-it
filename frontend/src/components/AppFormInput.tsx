import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Control, RegisterOptions, useController } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

import colors from '../utils/colors';
import AppInputErrorMessage from './AppInputErrorMessage';

interface Props extends TextInputProps {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  iconSize?: number;
  iconColor?: string;
  iconPosition?: 'left' | 'right';
  name: string;
  control: Control;
  rules: RegisterOptions;
}
const AppFormInput: React.FC<Props> = ({
  name,
  control,
  rules,
  icon,
  iconSize = 16,
  iconColor = colors.dark,
  iconPosition = 'left',
  ...otherProps
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <View className="flex w-full">
      <View
        className={`${
          error ? 'bg-red-100' : 'bg-gray-100'
        } flex-row items-center rounded-md my-2.5 p-2.5`}
      >
        {icon && iconPosition === 'left' && (
          <View className="mr-1">
            <Ionicons name={icon} size={iconSize} color={iconColor} />
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
            <Ionicons name={icon} size={iconSize} color={iconColor} />
          </View>
        )}
      </View>
      {error && <AppInputErrorMessage error={error} />}
    </View>
  );
};

export default AppFormInput;
