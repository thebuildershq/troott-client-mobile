import React from "react";
import { View, TextInput, Text } from "react-native";
import { palette} from "../../designSystem/theme/palette";
import { ITextInput } from "../../utils/interface.utl";
import componentStyles from "../../assets/styles/components";


const CustomTextInput = (textProps: ITextInput) => {
 
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
    <View style={[componentStyles.twrapper, style]}>
      {label && <Text style={[componentStyles.tlabel, labelStyle]}>{label}</Text>}

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
          style={[componentStyles.input, disabled && componentStyles.tdisabledInput]}
          value={value}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor || palette.grey100}
          onChangeText={!disabled ? onChangeText : undefined}
          keyboardType={keyboardType}
          editable={!disabled}
          autoCapitalize={props.autoCapitalize}
          accessibilityLabel={label || placeholder}
          accessibilityHint="Text input field"
          width={props.width}
          {...props}
        />

        {rightIcon && <View style={componentStyles.ticon}>{rightIcon}</View>}
      </View>
    </View>
  );
};

export default CustomTextInput;
