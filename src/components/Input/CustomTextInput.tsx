import React from "react";
import { View, TextInput, Text, StyleSheet, ViewStyle } from "react-native";
import { palette, Palette } from "../../designSystem/theme/palette";

interface CustomTextInputProps {
  id: string;
  value: string;
  label?: string;
  labelStyle?: Partial<ViewStyle>;
  placeholder?: string;
  placeholderColor?: string;
  onChangeText: (val: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "url";
  variant?: "outline" | "filled" | "transparent";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  backgroundColor?: Palette | string;
  borderRadius?: number;
  paddingVertical?: number;
  secureTextEntry?: boolean;
  disabled?: boolean;
  style?: Partial<ViewStyle>;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  maxLength?: number;
  clearButton?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = (textProps) => {
  const {
    id,
    value,
    label,
    labelStyle,
    placeholder,
    placeholderColor,
    onChangeText,
    keyboardType = "default",
    variant = "outline",
    leftIcon,
    rightIcon,
    backgroundColor,
    paddingVertical,
    borderRadius,
    secureTextEntry,
    disabled = false,
    style,
    ...props
  } = textProps;

  return (
    <View style={[styles.wrapper, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <View
        style={[
          styles.container,
          variant === "outline" && styles.outline,
          { backgroundColor: disabled ? palette.grey700 : backgroundColor },
        ]}
      >
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}

        <TextInput
          id={id}
          style={[styles.input, disabled && styles.disabledInput]}
          value={value}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor || palette.grey100}
          onChangeText={!disabled ? onChangeText : undefined}
          keyboardType={keyboardType}
          editable={!disabled}
          accessibilityLabel={label || placeholder}
          accessibilityHint="Text input field"
          {...props}
        />

        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: palette.grey800,
    marginBottom: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    height: 50,
  },
  outline: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: palette.white,
    paddingVertical: 10,
  },
  disabledInput: {
    color: palette.grey900,
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default CustomTextInput;
