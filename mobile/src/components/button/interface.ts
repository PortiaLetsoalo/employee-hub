import type { StringOmit, ThemeSpacing } from '@rneui/base';
import type {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { IShaIconProps } from '../icon/interface';

export interface IShaButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  color?: StringOmit<'primary' | 'secondary' | 'success' | 'error' | 'warning'>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  icon?: IShaIconProps;
  titleStyle?: StyleProp<TextStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  loading?: boolean;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  radius?: number | StringOmit<keyof ThemeSpacing>;
  raised?: boolean;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  type?: 'solid' | 'clear' | 'outline';
  uppercase?: boolean;
  children?: React.ReactNode;
}
