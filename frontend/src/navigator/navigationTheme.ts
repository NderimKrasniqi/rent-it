import { DefaultTheme } from '@react-navigation/native';
import colors from '../utils/colors';

export const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
