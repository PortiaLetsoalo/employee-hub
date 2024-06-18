import type {
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IShaAutocompleteProps<T> {
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onSelected?: (item: T) => void | undefined;
  data: T[];
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  query?: string;
  showResults?: boolean;
  onDropDown?: () => void;
  onClear?: () => void;
  getFilteredData?: (query:string) => void;
  setSelectedItem?: any;
  placeholder?: string;
  queryRef?: any;
  valuePropName: string;
  hideLabel?: boolean;
  label?: string;
  disabled?: boolean;
  disableSearch?: boolean;
  loading?: boolean;
  errorMessage?: string;
  shakeOnError?: boolean;
  defaultValue?: string;
  iconColor?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number;
  placeholderTextColor?: ColorValue | undefined;
  secureTextEntry?: boolean;
  blurOnSubmit?: boolean | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  styles?: IShaAutocompleteStyles;
  firstValuePropName?: string;
  secondValuePropName?: string;
}

interface IShaAutocompleteStyles {
  input?: StyleProp<TextStyle> | undefined;
  listContainer?: StyleProp<ViewStyle>;
  flatListItem?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  inputMainContainer?: StyleProp<ViewStyle>;
  label?: StyleProp<TextStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  iconContainer?: StyleProp<ViewStyle>;
  rightIconButton?: StyleProp<ViewStyle>;
  noDataText?: StyleProp<ViewStyle>;
}

