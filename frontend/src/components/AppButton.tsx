import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

interface ButtonProps extends TouchableHighlightProps {
  title: string;
  color: 'bg-primary-500' | 'bg-secondary-900';
}

const AppButton: React.FC<ButtonProps> = ({ title, color, ...otherProps }) => {
  return (
    <TouchableHighlight
      className={`bg-medium w-full rounded-md p-3.5 my-2 ${color}`}
      {...otherProps}
    >
      <Text className="text-light text-center text-lg font-bold uppercase">
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default AppButton;
