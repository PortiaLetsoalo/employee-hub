import { StyleSheet } from 'react-native';
import { useTheme } from '../../providers/theme';

export const getStyling = () => {
  const { themeColors } = useTheme();
  return StyleSheet.create({
    viewStyle: {
      backgroundColor: themeColors?.containerColor,
    },
  });
};
