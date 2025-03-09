import React from "react";
import { Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { TextInput as RNTextInput} from "react-native-paper";
import { ITextInput } from "../../../utils/interface.utl";
import customStyles from "../../../assets/styles/custom";


export const TextInputComponent = (props: ITextInput) => {
  
  const { error, onBlur: pureOnBlur, onFocus, backgroundColor, control, ...rest } = props;

  return (
    <View style={[customStyles.textInputContainer, { backgroundColor }]}>
      <Controller
        control={control}
        name={props.name}
        render={({ field: { onChange, onBlur, value } }) => (
          
          <View style={props.left || props.right ? customStyles.row : {}}>
            {props.left}

            <RNTextInput
              value={value}
              onChangeText={onChange}
              onBlur={() => (pureOnBlur ? pureOnBlur() : onBlur())}
              onFocus={onFocus}
              autoCapitalize="none"
              mode="outlined"
              error={!!error}
              outlineColor={!error ? "#666666" : "red"}
              activeOutlineColor="green"
              editable={props.editable}
              style={[customStyles.input, props.containerStyle]}
              onPressIn={props.onPress}
              {...rest}
            />
            {props.right}
          </View>
        )}
      />
      {error && <Text style={customStyles.errorText}>{error}</Text>}
    </View>
  );
};


// import React, { useState } from "react";
// import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
// import { Feather } from "@expo/vector-icons"; // Feather icons for eye/eye-off

// interface PasswordInputProps {
//   placeholder?: string;
//   name: any;
//   id?: string;
//   defaultValue?: string;
//   autoComplete?: boolean;
//   hasIcon?: boolean;
//   icon?: string;
//   showFocus?: boolean;
//   onChangeText?: (text: string) => void;
// }

// const PasswordInput: React.FC<PasswordInputProps> = ({
//   placeholder = "Type here",
//   name,
//   id,
//   defaultValue,
//   autoComplete = false,
//   hasIcon = false,
//   icon = "user",
//   showFocus,
//   onChangeText,
// }) => {
//   const [passwordType, setPasswordType] = useState<boolean>(true);

//   const toggleType = () => {
//     setPasswordType(!passwordType);
//   };

//   return (
//     <View style={[styles.container, hasIcon ? styles.withIcon : {}]}>
//       {hasIcon && (
//         <Feather name={icon} size={20} color="gray" style={styles.icon} />
//       )}

//       <TextInput
//         id={id}
//         name={name}
//         secureTextEntry={passwordType}
//         placeholder={placeholder}
//         defaultValue={defaultValue}
//         onChangeText={onChangeText}
//         autoComplete={autoComplete ? "password" : "off"}
//         style={[styles.input, showFocus && styles.focusedInput]}
//       />

//       <TouchableOpacity onPress={toggleType} style={styles.eyeIcon}>
//         <Feather name={passwordType ? "eye" : "eye-off"} size={20} color="gray" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     height: 45,
//   },
//   withIcon: {
//     paddingLeft: 35,
//   },
//   icon: {
//     position: "absolute",
//     left: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 10,
//   },
//   focusedInput: {
//     borderColor: "#007bff",
//   },
//   eyeIcon: {
//     position: "absolute",
//     right: 10,
//   },
// });

// export default PasswordInput;
