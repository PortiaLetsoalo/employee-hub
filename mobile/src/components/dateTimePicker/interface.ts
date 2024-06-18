import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ShaInputDateTime = Date;

export interface IShaDateTimePickerProps {
  mode: 'date' | 'time' | 'datetime';
  date: Date;
  modal?: boolean;
  title?: string | null;
  disabled?: boolean;
  minimumDate?: Date;
  maximumDate?: Date;
  open?: boolean;
  textColor?: string;
  onCancel?: () => void;
  onConfirm?: (date: Date) => void;
  hideLabel?: boolean;
  labelText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  displayText?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  touchableContainerStyle?: StyleProp<ViewStyle>;
}

export interface IShaDateTimePickerMutatedProps
  extends IShaDateTimePickerProps {
  openModal: () => void;
  closeModal: () => void;
}
