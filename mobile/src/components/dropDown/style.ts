import {StyleSheet, ViewStyle} from 'react-native';
import type {IShaDropdownProps} from './interface';
import {useTheme} from '../../providers/theme';
import {flatten} from '../../utils/index';
import {Colors} from '../../utils/constants/index';

const getStyling = (props: IShaDropdownProps<any>) => {
  const {theme, themeColors} = useTheme();
  const {styles} = props ?? {};
  const listContainerHeight = Math.min(props?.data?.length * 40, 150);
  const mainContainerStyle = (styles?.inputMainContainer ?? {}) as ViewStyle;

  return StyleSheet.create({
    container: flatten([{borderBottomWidth: 0}, styles?.container]),
    inputMainContainer: flatten([
      {borderBottomWidth: 0},
      styles?.inputMainContainer,
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
        ...(mainContainerStyle?.marginStart && {
          marginStart: mainContainerStyle?.marginStart,
        }),
        ...(mainContainerStyle?.marginEnd && {
          marginEnd: mainContainerStyle?.marginEnd,
        }),
      },
      styles?.input,
    ]),
    inputContainer: flatten([{borderBottomWidth: 0}, styles?.inputContainer]),
    label: flatten([
      {
        marginBottom: 5,
        color: themeColors?.textColor ?? themeColors?.primaryColor,
        fontSize: 14,
        fontFamily: theme?.font?.boldFontFamily,
      },
      styles?.label,
      {display: props.label ? 'flex' : 'none'},
    ]),
    listContainer: flatten([
      {
        height: props?.data?.length === 0 ? 40 : listContainerHeight,
        backgroundColor: '#fff',
        zIndex: 2,
        position: 'absolute',
        borderColor: '#D8D8D8',
        borderWidth: 1,
        borderRadius: 5,
        left: 0,
        right: 0,
        ...((styles?.inputMainContainer as ViewStyle)?.marginStart && {
          marginStart: (styles?.inputMainContainer as ViewStyle)?.marginStart,
        }),
        ...((styles?.inputMainContainer as ViewStyle)?.marginEnd && {
          marginEnd: (styles?.inputMainContainer as ViewStyle)?.marginEnd,
        }),
      },
      styles?.listContainer,
    ]),
    item: flatten([
      {
        width: '100%',
        alignSelf: 'flex-start',
        height: 20,
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        marginTop: 8,
        marginBottom: 8,
      },
      styles?.flatListItem,
    ]),
    rightIconButton: flatten([
      {
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
        paddingStart: 10,
      },
      styles?.rightIconButton,
    ]),
    noDataText: flatten([
      {alignSelf: 'center', marginTop: 7},
      styles?.noDataText,
    ]),
    iconContainer: flatten([
      {
        position: 'absolute',
        right: 5,
        top: 0,
        ...((styles?.inputMainContainer as ViewStyle)?.marginStart && {
          marginStart: (styles?.inputMainContainer as ViewStyle)?.marginStart,
        }),
        ...((styles?.inputMainContainer as ViewStyle)?.marginEnd && {
          marginEnd: (styles?.inputMainContainer as ViewStyle)?.marginEnd,
        }),
      },
      styles?.iconContainer,
    ]),
    text: {
      height: '100%',
    },
    border: {
      backgroundColor: Colors.DefaultBorderColor,
      marginBottom: 0,
      paddingHorizontal: 15,
      marginTop: 0,
    },
    labelStyle: flatten([
      {
        color: themeColors?.textColor ?? themeColors?.primaryColor,
        fontFamily: theme?.font?.mediumFontFamily,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        ...(mainContainerStyle?.marginStart && {
          marginStart: mainContainerStyle?.marginStart,
        }),
        ...(mainContainerStyle?.marginEnd && {
          marginEnd: mainContainerStyle?.marginEnd,
        }),
      },
      styles?.label,
    ]),
  });
};

export {getStyling};
