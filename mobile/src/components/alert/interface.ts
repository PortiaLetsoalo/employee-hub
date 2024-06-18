import type { IconType } from '@rneui/base';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IShaAlertProps {
  alertType: 'success' | 'info' | 'warning' | 'error';
  closable?: boolean;
  closeIconColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  description: string;
  descriptionStyle?: StyleProp<TextStyle>;
  icon?: IShaAlertIcon;
  iconColor?: string;
  innerContainerStyle?: StyleProp<ViewStyle>;
  showIcon: boolean;
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

export interface IShaAlertMutatedProps extends IShaAlertProps {
  closed?: boolean;
  onCloseHandler?: any;
}

export interface IShaAlertIcon {
  name: string;
  type?: IconType;
}
