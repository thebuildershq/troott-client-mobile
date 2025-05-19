import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { palette } from "../../designSystem/theme/palette";
import { IPasswordInput } from "../../utils/interface.utl";
import componentStyles from "../../assets/styles/components";
import Icon from "react-native-vector-icons/FontAwesome";

const PasswordInput = (PProps: IPasswordInput) => {
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
    showPasswordIcon,
    hidePasswordIcon,
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
    <View style={[componentStyles.twrapper, style]}>
      {label && (
        <Text style={[componentStyles.tlabel, labelStyle]}>{label}</Text>
      )}

      <View
        style={[
          componentStyles.tcontainer,
          variant === "outline" && componentStyles.toutline,
          { backgroundColor: disabled ? palette.grey700 : backgroundColor },
        ]}
      >
        {leftIcon && <View style={componentStyles.icon}>{leftIcon}</View>}

        <TextInput
          id={id}
          style={[
            componentStyles.input,
            disabled && componentStyles.tdisabledInput,
          ]}
          value={value}
          key={id}
          secureTextEntry={isSecure}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor || palette.grey100}
          onChangeText={!disabled ? onChangeText : undefined}
          keyboardType={keyboardType}
          editable={!disabled}
          maxLength={props.maxLength}
          autoCapitalize={props.autoCapitalize}
          accessibilityLabel={label || placeholder}
          accessibilityHint="Text input field"
          {...props}
        />

        {secureTextEntry ? (
          <TouchableOpacity
            style={componentStyles.ticon}
            onPress={() => setIsSecure((prev) => !prev)}
          >
            {isSecure ? hidePasswordIcon : showPasswordIcon}
          </TouchableOpacity>
        ) : (
          rightIcon && <View style={componentStyles.ticon}>{rightIcon}</View>
        )}
        
      </View>
    </View>
  );
};

export default PasswordInput;
