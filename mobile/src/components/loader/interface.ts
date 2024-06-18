import type { StyleProp, ViewStyle } from 'react-native';

export interface IShaLoaderProps {
  color?: string;
  loading?: boolean;
  loadingText?: string;
  loaderColor?: string;
  size?: number | 'small' | 'large';
  style?: StyleProp<ViewStyle>;
  type?: 'obscure' | 'overlay';
  overlayType?: 'flat' | 'circular';
  theme?: ReactNativePaper.Theme;
  customIndicator?: React.ReactNode;
  children?: React.ReactNode;
}
