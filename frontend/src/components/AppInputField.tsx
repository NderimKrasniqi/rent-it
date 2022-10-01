import { View, TextInput, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

interface Props extends TextInputProps {
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

const AppInputField: React.FC<Props> = ({
  icon,
  onChangeText,
  value,
  ...otherProps
}) => {
  return (
    <View className="bg-gray-100 flex flex-row items-center w-full rounded-md my-2.5 p-3">
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
        placeholderTextColor={colors.medium}
        className="flex-1 text-lg text-dark"
        onChangeText={onChangeText}
        value={value}
        {...otherProps}
      />
    </View>
  );
};

export default AppInputField;
