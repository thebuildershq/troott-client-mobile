import { Pressable, View, TextInput as RNTextInput, Text } from "react-native";
import { Controller } from "react-hook-form";
import Icon from "../Icons/Icons";
import { ITextInput } from "../../../utils/interface.utl";
import componentStyles from "../../../assets/styles/components";
import { IconName } from "../../../assets/icons/icons";

export const TextInput = (textProps: ITextInput) => {

  const {
    control,
    name,
    error,
    onBlur: externalOnBlur,
    onFocus,
    onPress,
    left,
    right,
    leftOnPress,
    rightOnPress,
    editable,
    containerStyle,
    textStyle,
    backgroundColor,
    ...props
  } = textProps


  return (
    <View style={[componentStyles.textInputContainer, { backgroundColor }]}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[left || right ? componentStyles.inputRoot : {}]}>
            {left && (
              <Pressable onPress={leftOnPress}>
                <Icon name={left as IconName} />
              </Pressable>
            )}

            <RNTextInput
              value={value}
              onChangeText={onChange}
              onBlur={() => (externalOnBlur ? externalOnBlur(onBlur) : onBlur())}
              onFocus={onFocus}
              onPressIn={onPress}
              autoCapitalize="none"
              editable={editable}
              style={[
                containerStyle,
                left || right ? { width: "80%" } : {},
              ]}
              {...props}
            />

            {right && (
              <Pressable onPress={rightOnPress}>
                <Icon name={right as IconName} />
              </Pressable>
            )}
          </View>
        )}
      />

      {error && <Text style={textStyle}>{error}</Text>}
    </View>
  );
};