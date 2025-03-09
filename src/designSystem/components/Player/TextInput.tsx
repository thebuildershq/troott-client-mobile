import { Pressable, View, TextInput as RNTextInput, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import Icon from "../Icons/Icons";
import { ITextInput } from "../../../utils/interface.utl";
import customStyles from "../../../assets/styles/custom";


export const TextInput = (t: ITextInput) => {

    const {
      error,
      onBlur: pureOnBlur,
      onFocus,
      backgroundColor,
      onPress,
      ...props
    } = t

    return (
      <View style={[customStyles.textInputContainer, { backgroundColor }]}>
        <Controller
          control={props.control}
          render={({
            field: { onChange, onBlur, value },
          }: {
            field: { onChange: () => void; onBlur: () => void; value: string };
          }) => (
            <View style={[(!!props.left || !!props.right) && customStyles.inputRoot]}>
              {props.left && (
                <Pressable onPress={props.leftOnPress}>
                  <Icon name={props.left} />
                </Pressable>
              )}
              <RNTextInput
                value={value}
                onChangeText={onChange}
                onBlur={() => (pureOnBlur ? pureOnBlur(onBlur) : onBlur())}
                onFocus={() => onFocus?.()}
                autoCapitalize="none"
                editable={props?.editable}
                style={[props.containerStyle, (!!props.left || !!props.right) && {width: "80%"}]}
                onPressIn={onPress}
                {...props}
              />
              {props.right && (
                <Pressable onPress={props.rightOnPress}>
                  <Icon name={props.right} />
                </Pressable>
              )}
            </View>
          )}
          name={props.name}
        />
        {error ? <Text style={props.textStyle}>{error}</Text> : null}
      </View>
    );
  };
  