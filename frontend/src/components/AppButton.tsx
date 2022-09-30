import { Text, TouchableHighlight } from 'react-native';

type AppButtonProps = {
  title: string;
  bgColor: string;
  tintColor: string;
  onPress: () => void;
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  bgColor,
  tintColor,
  onPress,
}) => {
  return (
    <TouchableHighlight
      className={`${bgColor} rounded-md p-3.5 m-2`}
      underlayColor={tintColor}
      onPress={onPress}
    >
      <Text className="text-light text-center text-xl font-bold uppercase">
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default AppButton;
