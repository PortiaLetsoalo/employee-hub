import { StyleSheet, TextProps } from 'react-native';
import { useTheme } from '../../providers/theme';
import { flatten } from '../../utils/index';

export const getStyling = (props: TextProps) => {
  const { theme, themeColors } = useTheme();
  return StyleSheet.create({
    text: flatten([
      {
        color: themeColors?.iconColor ?? themeColors?.primaryColor,
        fontFamily: theme?.font?.mediumFontFamily,
        fontSize: 14,
      },
      props.style,
    ]),
  });
};
