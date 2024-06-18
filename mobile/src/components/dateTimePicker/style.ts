import { StyleSheet } from 'react-native';
import type { IShaDateTimePickerProps } from './interface';
import { useTheme } from '../../providers/theme';
import { flatten } from '../../utils/index';
import { Colors } from '../../utils/constants/index';

export const getStyling = (props: IShaDateTimePickerProps) => {
  const { theme, themeColors } = useTheme();
  return StyleSheet.create({
    container: flatten([
      {
        width: undefined,
      },
      props.containerStyle,
    ]),
    displayText: flatten([
      {
        fontSize: 14,
        color: theme?.colors?.light?.textColor ?? Colors.DefaultTextColor,
      },
      props.displayText,
    ]),
    touchableContainer: flatten([
      {
        borderColor: '#D8D8D8',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      props.touchableContainerStyle,
    ]),
    icon: flatten([
      {
        fontSize: 14,
        alignSelf: 'center',
        color: theme?.colors?.light?.iconColor ?? Colors.DefaultIconColor,
      },
      props.iconStyle,
    ]),
    label: flatten([
      {
        color: themeColors?.textColor ?? themeColors?.primaryColor,
        fontFamily: theme?.font?.mediumFontFamily,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      props.labelStyle,
    ]),

  });
};
