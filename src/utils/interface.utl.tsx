import { ReactNode } from "react";
import {
  StyleProp,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextStyle,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  ImageResizeMode,
} from "react-native";
import { ImageProps, SvgProps } from "react-native-svg";
import { IconName } from "../assets/icons/icons";
import { Palette } from "../designSystem/theme/palette";
import { Spacing } from "../designSystem/theme/spacing";
import { Control } from "react-hook-form";
import { ImageName, IMAGES } from "../assets/images/images";
import { Fonts } from "../designSystem/theme/font";

export interface IIcon extends SvgProps {
  name: IconName;
  size?: number;
  style?: StyleProp<ViewStyle>;
  iconColor?: string;
  stroke?: string;
  iconOpacity?: number;
  strokeWidth?: number;
  focused?: boolean;
}

export interface IImage  {
  name: keyof typeof IMAGES;
  size?: number;
  style?: StyleProp<ImageStyle>;
  source?: ImageSourcePropType;
  resizeMode?: ImageResizeMode
  onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export interface IButton {
  title: string;
  disabled: boolean;
  loading: boolean;
  alignSelf?: ViewStyle["alignSelf"];
  style?: ViewStyle;
  textProps?: TextStyle;
  backgroundColor?: Palette;
  color?: Palette;
  left?: ReactNode;
  right?: ReactNode;
  borderRadius?: Spacing;
  padding?: Spacing;
  paddingHorizontal?: Spacing;
  paddingVertical?: Spacing;

  onPress: () => void;
}

export interface ITextInput {
  backgroundColor: Palette;
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  control: Control<any, any>;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  containerStyle?: any;
  textStyle?: TextStyle
 
  onPress?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
} 

export interface IText {
  color: Palette;
  fontFamily: Fonts;
  fontSize: Spacing;
  styles?: TextStyle;
  children: React.ReactNode;
}

// export interface ITextInput {
//   backgroundColor: Palette;
//   label: string;
//   name: string;
//   error?: string;
//   placeholder?: string;
//   left?: IconName;
//   leftOnPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
//   right?: IconName;
//   rightOnPress: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
//   control: Control<any, any>;
//   editable?: boolean;
//   onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
//   onFocus?: Function;
//   onBlur?: Function;
//   multiline?: boolean;
//   numberOfLines?: number;
//   secureTextEntry?: boolean;
//   containerStyle?: TextStyle;
//   textStyle?: TextStyle;
// }


export interface IControl {
  onPress: () => void;
  name: IconName;
  size: number;
}

export interface ISlider {
  title: string;
  data: any[];
  renderItem: ({ item }: { item: any }) => any;
  keyExtractor: (item: any, index: number) => string;
  rootStyles?: ViewStyle;
  imageContainerStyles?: ViewStyle;
}


export type ISearchBox = {
  title: string;
  label: string;
  placeholder: string;
  control: Control<any, any>;
  errors: any;
  name: string;
  backgroundColor: Palette;
  containerStyle?: TextStyle;
  isPassword?: boolean;
  inputRight?: IconName;
  inputRightOnPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  inputLeft?: IconName;
  inputLeftOnPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
};


export interface IStorage {
  keepData(key: string, data: object | string): Promise<void>;
  fetchData(key: string): Promise<string | null>;
  removeData(key: string): Promise<void>;
  clearAll(): Promise<void>;
}