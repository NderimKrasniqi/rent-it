import { Text } from 'react-native';
import { FieldError } from 'react-hook-form';

interface ErrorProps {
  error: FieldError | undefined;
}
const AppInputErrorMessage: React.FC<ErrorProps> = ({ error }) => {
  if (!error) {
    return null;
  }
  return <Text className=" text-red-500 pl-3.5 text-xs ">{error.message}</Text>;
};

export default AppInputErrorMessage;
