import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { palette} from "../../theme/palette";
import { IPasswordInput } from "../../../utils/interface.utl";
import componentStyles from "../../../assets/styles/components";


const PasswordInput = (PProps: IPasswordInput) => {
  
    const {
    id,
    name,
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
  } = PProps;

  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={[componentStyles.wrapper, style]}>
      {label && <Text style={[componentStyles.label, labelStyle]}>{label}</Text>}

      <View
        style={[
          componentStyles.tcontainer,
          variant === "outline" && componentStyles.outline,
          { backgroundColor: disabled ? palette.grey700 : backgroundColor },
        ]}
      >
        {leftIcon && <View style={componentStyles.icon}>{leftIcon}</View>}

        <TextInput
          id={id}
          style={[componentStyles.input, disabled && componentStyles.disabledInput]}
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

        {rightIcon && <View style={componentStyles.ticon}>{rightIcon}</View>}
      </View>
    </View>
  );
};

export default PasswordInput;
