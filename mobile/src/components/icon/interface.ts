import type { IconType } from '@rneui/base';
import type {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { IconButtonProps } from 'react-native-vector-icons/Icon';

export interface IShaIconProps {
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: TextStyle;
  name: string;
  size?: number;
  raised?: boolean;
  reverse?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: IconButtonProps['style'];
  type: IconType;
}
