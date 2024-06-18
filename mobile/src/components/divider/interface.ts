import type { StyleProp, ViewStyle } from 'react-native';

export interface IShaDivider {
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  dashed?: boolean;
  vertical?: boolean;
  dividerViewStyle?: StyleProp<ViewStyle>;
}

