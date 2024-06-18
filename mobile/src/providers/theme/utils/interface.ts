import type { ColorValue } from 'react-native';
import type { ThemeMode } from './types';

export interface IShaThemeProviderProps {
  theme?: IShaTheme;
  themeMode?: ThemeMode;
}

export interface IShaTheme {
  toolbar?: IToolbarTheme;
  colors?: IThemeColors;
  font?: IThemeFontConfig;
  buttons?: IThemeButtonConfig;
  sidebar?: 'light' | 'dark';
}

export interface IThemeColors {
  light?: IThemePalette;
  dark?: IThemePalette;
  drawerLight?: IDrawerThemePalette;
  drawerDark?: IDrawerThemePalette;
}

export interface IThemePalette {
  primaryColor?: ColorValue | undefined;
  secondaryColor?: ColorValue | undefined;
  accentColor?: ColorValue | undefined;
  containerColor?: ColorValue | undefined;
  textColor?: ColorValue | undefined;
  buttonTextColor?: ColorValue | undefined;
  iconColor?: ColorValue | undefined;
  dividerColor?: ColorValue | undefined;
  errorColor?: ColorValue | undefined;
  warningColor?: ColorValue | undefined;
  successColor?: ColorValue | undefined;
  infoColor?: ColorValue | undefined;
  linkTextColor?: ColorValue | undefined;
}

export interface IToolbarTheme {
  statusBarColor?: string;
  toolbarColor?: string;
  textColor?: string;
  backIconColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  showDivider?: boolean;
}

export interface IDrawerThemePalette {
  containerColor?: ColorValue | undefined;
  iconColor?: ColorValue | undefined;
  textColor?: ColorValue | undefined;
  dividerColor?: ColorValue | undefined;
}

export interface IThemeFontConfig {
  boldFontFamily?: string | undefined;
  lightFontFamily?: string | undefined;
  mediumFontFamily?: string | undefined;
  regularFontFamily?: string | undefined;
  thinFontFamily?: string | undefined;
}

export interface IThemeButtonConfig {
  borderRadius?: number;
  height?: number;
}
