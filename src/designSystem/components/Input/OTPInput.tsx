import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, Text, ViewStyle } from "react-native";
import { palette, Palette } from "../../theme/palette";
import componentStyles from "../../../assets/styles/components";
import { IOTPInput } from "../../../utils/interface.utl";



const OTPInput = (textProps: IOTPInput) => {
  const {
    id,
    value,
    label,
    labelStyle,
    onChangeText,
    onSubmit,
    backgroundColor,
    paddingVertical,
    borderRadius,
    disabled = false,
    style,
    length = 6,
    ...props
  } = textProps;

  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    if (otp.join("").length === length) {
      onSubmit?.(otp.join("")); // Call an optional `onSubmit` function
    }
  }, [otp]);
  

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];

    if (value.length > 1) {
      // Handle pasting multiple characters
      const pastedValues = value.split("").slice(0, length);
      pastedValues.forEach((char, i) => {
        if (index + i < length) {
          newOtp[index + i] = char;
        }
      });

      setOtp(newOtp);
      onChangeText(newOtp.join(""));

      // Find last non-empty input and focus there
      const lastIndex = Math.min(index + pastedValues.length - 1, length - 1);
      inputRefs.current[lastIndex]?.focus();
      return;
    }

    // Handle normal single-character input
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    onChangeText(newOtp.join(""));

    if (value && index < length - 1) {
        setTimeout(() => {
          inputRefs.current[index + 1]?.focus();
        }, 100);
      } else if (index === length - 1) {
        inputRefs.current[index]?.blur();
      }
  };

  const handleBackspace = (value: string, index: number) => {
    if (!value) {
        let newOtp = [...otp];
        newOtp[index] = ""; 
  
        if (index > 0) {
          newOtp[index - 1] = ""; 
          inputRefs.current[index - 1]?.focus();
        }
  
        setOtp(newOtp);
        onChangeText(newOtp.join(""));
      }
  };

  return (
    <View style={[componentStyles.twrapper, style]}>
      {label && <Text style={[componentStyles.tlabel, labelStyle]}>{label}</Text>}

      <View
        style={[
          componentStyles.otpcontainer,
          { backgroundColor: disabled ? palette.grey700 : backgroundColor },
        ]}
      >
        {otp.map((digit, index) => (
          <TextInput
            id={id}
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref!)}
            style={[componentStyles.otpBox, disabled && componentStyles.tdisabledInput]}
            value={digit}
            onChangeText={(value) => !disabled  && handleChange(value, index)}
            onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleBackspace(digit, index);
                }
              }}
            keyboardType={"number-pad"}
            maxLength={length}
            textContentType="oneTimeCode"
            autoFocus={true}
            editable={!disabled}
            accessibilityLabel={label}
            accessibilityHint="OTP input field"
            {...props}
          />
        ))}
      </View>
    </View>
  );
};


export default OTPInput;
