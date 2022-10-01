import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

interface Props extends TouchableHighlightProps {
  title: string;
  color: string;
  onPress: () => void;
}

const AppButton: React.FC<Props> = ({
  title,
  color,
  onPress,
  ...otherProps
}) => {
  return (
    <TouchableHighlight
      className={`bg-medium w-full rounded-md p-3.5 my-2 ${color}`}
      onPress={onPress}
      {...otherProps}
    >
      <Text className="text-light text-center text-lg font-bold uppercase">
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default AppButton;
