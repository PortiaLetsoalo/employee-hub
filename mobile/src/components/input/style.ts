import { StyleSheet } from 'react-native';
import { useTheme } from '../../providers/theme';
import type { IShaInputMutatedProps } from './interface';
import { flatten } from '../../utils/index';
import { Colors } from '../../utils/constants/index';

export const getStyling = (props: IShaInputMutatedProps) => {
  const { theme, themeColors } = useTheme();
  return StyleSheet.create({
    container: flatten([
      {
        width: undefined,
        paddingHorizontal: 0,
      },
      props.containerStyle,
    ]),
    label: flatten([
      {
        marginBottom: 5,
        color: themeColors?.textColor ?? themeColors?.primaryColor,
        fontSize: 14,
        fontFamily: theme?.font?.boldFontFamily,
      },
      props.labelStyle,
      { display: props.label ? 'flex' : 'none' },
    ]),
    input: flatten([
      {
        borderColor: '#D8D8D8',
        borderRadius: 5,
        margin: 0,
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 10,
        flex: 1,
        fontFamily: theme?.font?.mediumFontFamily,
        fontSize: 14,
        color: theme?.colors?.light?.textColor ?? Colors.DefaultTextColor,
        backgroundColor: 'white',

      },
      props.inputStyle,
    ]),
    error: {
      color: '#ff7171',
    },
    anchorRightButton: { position: 'absolute', right: 20, top: 15 },
    inputContainer: flatten([
      { borderBottomWidth: 0 },
      props.inputContainerStyle,
    ]),
    style: flatten([{}, props.style]),
  });
};
