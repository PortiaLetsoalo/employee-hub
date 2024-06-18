import { StyleSheet } from 'react-native';
import { useTheme } from '../../providers/theme';
import type { IShaButtonProps } from './interface';
import { flatten } from '../../utils/index';
import { Colors } from '../../utils/constants/index';

export const getStyling = (props: IShaButtonProps) => {
  const { theme, themeColors } = useTheme();
  return StyleSheet.create({
    titleStyle: flatten([
      {
        color: themeColors?.buttonTextColor ?? Colors.DefaultButtonTextColor,
        fontFamily: theme?.font?.mediumFontFamily,
        fontSize: 14,
        textAlign: 'center',
      },
      props.titleStyle,
    ]),
    buttonStyle: flatten([
      {
        borderRadius: theme?.buttons?.borderRadius ?? 2,
        backgroundColor: themeColors?.accentColor ?? Colors.DefaultAccentColor,
        paddingHorizontal: 20,
      },
      !props.size || props.size == 'md'
        ? { height: theme?.buttons?.height ?? 40 }
        : {},
      props.buttonStyle,
    ]),
  });
};
