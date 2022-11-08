import { DefaultTheme, Theme } from '@react-navigation/native';
import colors from '../utils/colors';

export const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
    text: colors.medium,
    border: colors.white,
  },
};
