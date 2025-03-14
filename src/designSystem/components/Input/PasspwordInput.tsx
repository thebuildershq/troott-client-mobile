// import React, { useState } from "react";
// import { View } from "react-native";
// import { TextInput } from "./TextInput";
// import { Control } from "react-hook-form";
// import { IconName } from "../assets/icons/icons";

// interface PasswordInputProps {
//   control: Control<any>;
//   name: string;
//   error?: string;
// }

// export const PasswordInput = ({ control, name, error }: PasswordInputProps) => {
//   const [secureTextEntry, setSecureTextEntry] = useState(true);

//   return (
//     <View>
//       <TextInput
//         control={control}
//         name={name}
//         placeholder="Enter your password"
//         secureTextEntry={secureTextEntry}
//         error={error}
//         left="lock" // Assuming you have a lock icon in your Icon component
//         right={secureTextEntry ? "eye" : "eye-off"} // Toggle between eye and eye-off
//         rightOnPress={() => setSecureTextEntry(!secureTextEntry)}
//       />
//     </View>
//   );
// };
