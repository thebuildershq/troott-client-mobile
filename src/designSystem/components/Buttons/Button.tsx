import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Animated, Easing } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { spacing } from "../../theme/spacing";
import { palette } from "../../theme/palette";
import { fonts } from "../../theme/font";
import { IButton } from "../../../utils/interface.utl";


export const Button = ( Bprops: IButton) => {
  
  const {
    title,
    onPress,
    disabled = false,
    loading = false,
    variant,
    alignSelf,
    style,
    backgroundColor,
    color,
    left,
    right,
    borderRadius,
    ...props
  } = Bprops;

  const spinLoader = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.timing(spinLoader, {
          toValue: 1,
          duration: 1000, 
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [loading]);

  const spin = spinLoader.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: palette[backgroundColor as keyof typeof palette],
          borderRadius: 2
          
        };
      case "opacity":
        return {
          backgroundColor: palette.green200,
          opacity: 0.8,
        };
      case "grey":
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: palette[backgroundColor as keyof typeof palette],
          borderRadius: 2
          
        }
      default:
        return { backgroundColor: palette.baseGreen};
    }
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading} activeOpacity={0.7}>
      <View
        style={[
          styles.buttonBase,
          getVariantStyles(),
          {
            alignSelf,
            borderRadius,
            padding: spacing.space12,
            paddingHorizontal: spacing.space24,
            paddingVertical: spacing.space24,
            opacity: disabled ? 0.6 : 1,
          },
          style,
        ]}
        {...props}
      >
        {loading ? (
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Feather name="loader" size={32} color={variant === "outline" ? palette.baseWhite ? "grey": palette.green400 : palette.baseBlack} />
          </Animated.View>
        ) : (
          <View style={left || right ? styles.row : {}}>
            {left}
            <Text style={[styles.text, { color: variant === "outline" ? (palette[backgroundColor as keyof typeof palette] || "grey") : palette[color as keyof typeof palette] }]}>
              {title}
            </Text>
            {right}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing.space8,
  },
  text: {
    fontFamily: fonts.family.matterBold,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
