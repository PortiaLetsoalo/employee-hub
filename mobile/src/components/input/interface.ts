import type { IconNode, InputProps } from '@rneui/base';
import type { Ref } from 'react';
import type {
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';

export interface IShaInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
  label?: string | React.ReactNode;
  labelStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  leftIcon?: IconNode;
  maxLength?: number;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: ColorValue | undefined;
  rightIcon?: IconNode;
  secureTextEntry?: boolean;
  shakeOnError?: boolean;
  value?: string;
  blurOnSubmit?: boolean | undefined;
  ref?: Ref<InputProps | any>;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
}

export interface IShaInputMutatedProps
  extends Omit<IShaInputProps, 'shakeOnError'> {
  ref?: Ref<InputProps | any>;
  underlineColorAndroid?: ColorValue;
}
