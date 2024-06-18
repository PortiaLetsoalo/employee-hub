import { StyleSheet } from 'react-native';
import type { IShaAlertProps } from './interface';
import { flatten } from '../../utils/index';
import { Colors } from '../../utils/constants/index';
import { useTheme } from '../../providers/theme';

export const getStyling = (props: IShaAlertProps) => {
  let alertColor = getColor(props.alertType);
  return StyleSheet.create({
    container: flatten([
      {
        backgroundColor: alertColor,
        borderWidth: 0.5,
        borderColor: alertColor,
        borderRadius: 0.8,
      },
      props.containerStyle ?? {},
    ]),
    innerContainer: flatten([
      {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.93)',
        borderWidth: 0,
      },
      props.innerContainerStyle ?? {},
    ]),
    leftIcon: {
      marginRight: 10,
    },
    textColumnContainer: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent',
    },
    closeIconContainer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      backgroundColor: 'transparent',
    },
    textStyle: flatten([
      {
        fontSize: 16,
        color: Colors.DefaultTextColor,
      },
      props.textStyle,
    ]),
    descriptionStyle: flatten([
      {
        fontSize: 12,
        color: Colors.DefaultTextColor,
      },
      props.descriptionStyle,
    ]),
  });
};

export const getColor = (alertType: string) => {
  const { themeColors } = useTheme();
  switch (alertType) {
    case 'success': {
      return themeColors?.successColor
        ? `${themeColors.successColor.toString()}`
        : Colors.DefaultSuccessColor;
    }
    case 'info': {
      return themeColors?.infoColor
        ? `${themeColors.infoColor.toString()}`
        : Colors.DefaultInfoColor;
    }
    case 'warning': {
      return themeColors?.warningColor
        ? `${themeColors.warningColor.toString()}`
        : Colors.DefaultWarningColor;
    }
    case 'error': {
      return themeColors?.errorColor
        ? `${themeColors.errorColor.toString()}`
        : Colors.DefaultErrorColor;
    }
    default: {
      return '#F7FFED';
    }
  }
};
