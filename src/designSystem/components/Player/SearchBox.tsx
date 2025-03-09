import React from "react";
import { StyleSheet, TextStyle} from "react-native";
import { ISearchBox } from "../../../utils/components.types";
import { Text } from "./Text";
import { spacing } from "../../theme/spacing";
import { TextInput } from "./TextInput";
import { fonts } from "../../theme/font";
import { palette } from "../../theme/palette";

const SearchBox = (props: ISearchBox) => {
  
    const {
    title,
    label,
    placeholder = "",
    control,
    errors,
    name,
    backgroundColor,
    containerStyle,
    isPassword = false,
    inputRight,
    inputLeft,
    inputRightOnPress,
    inputLeftOnPress,
  } = props;

  return (
    <>
    <Text
      color="white"
      fontFamily="matterBold"
      fontSize="space-32"
      styles={{ marginBottom: spacing["space-8"] }}
    >
      {title}
    </Text>
    <TextInput
      control={control}
      label={label}
      placeholder={placeholder}
      error={errors}
      name={name}
      backgroundColor={backgroundColor}
      containerStyle={StyleSheet.flatten([
        {
          fontFamily: fonts.family.matterRegular,
          fontSize: spacing["space-16"],
          color: palette["white"],
          paddingVertical: spacing['space-4'] + spacing['space-2']
        },
        containerStyle,
      ]) as TextStyle}
      secureTextEntry={isPassword}
      left={inputLeft}
      right={inputRight}
      leftOnPress={inputLeftOnPress as any}
      rightOnPress={inputRightOnPress as any}
    />
  </>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
