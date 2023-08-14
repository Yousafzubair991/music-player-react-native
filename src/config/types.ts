export interface ICustomButton {
  title?: string;
  onPress?: () => void;
  backgroundColor?: string;
  width?: number;
  height?: number;
  loading?: boolean;
  disabled?: boolean;
  textColor?: string;
  maxWidth?: any;
  marginVertical?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: number | string;
  icon?: any;
  alignSelf?: string;
  fontSize?: any;
}

export interface ICustomInput {
  label?: any;
  style?: any;
  onChangeText?: any;
  value?: any;
  icon?: any;
  iconPosition?: any;
  error?: any;
  secureTextEntry?: any;
  borderRadius?: any;
  editable?: any;
  backgroundColor?: any;
  textColor?: any;
  activeBorderColor?: any;
  height?: any;
  textAlignVertical?: any;
  numberOfLines?: any;
  keyboardType?: any;
  multiline?: any;
  placeholder?: any;
  placeholderTextColor?: any;
  width?: any;
  maxLength?: any;
  textCenter?: any;
  name?: any;
  returnKeyType?: any;
}
