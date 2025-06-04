import { PressableProps, ViewStyle, Pressable, TextStyle } from "react-native";
import React, { useEffect } from "react";
import { theme } from "@/constants/theme";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Text from "./text";
import Loader from "./loader";
import { sizes } from "@/constants/sizes";

interface ButtonProps extends PressableProps {
  label?: string;
  variant?: "primary" | "outline" | "secondary" | "ghost";
  containerStyle?: ViewStyle;
  isLoading?: boolean;
  children?: React.ReactNode;
}

function VariantStyle(
  variant: "primary" | "outline" | "secondary" | "ghost" = "primary"
): ViewStyle {
  const shared_styles: ViewStyle = {
    width: "100%",
    padding: theme.sizes.spacing.sm,
    borderRadius: theme.sizes.radius.xs,
    height: sizes.spacing["2xl"],
    justifyContent: "center",
    alignItems: "center",
  };
  switch (variant) {
    case "primary":
      return {
        backgroundColor: theme.colors.green[500],
        ...shared_styles,
      };
    case "outline":
      return {
        borderWidth: 1,
        borderColor: theme.colors.grey[100],
        ...shared_styles,
      };

    case "secondary":
      return {};

    case "ghost":
      return {
        ...shared_styles,
        height:'auto'
      };
    default:
      return {};
  }
}

function textVariantStyle(
  variant: "primary" | "outline" | "secondary" | "ghost" = "primary"
): TextStyle {
  switch (variant) {
    case "primary":
      return {
        color: theme.colors.grey[800],
      };
    case "outline":
      return {
        color: theme.colors.grey[100],
      };
    case "ghost":
      return {
        color: theme.colors.grey[100],
      };
    case "secondary":
      return {};
    default:
      return {};
  }
}
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = ({
  label,
  containerStyle,
  variant = "primary",
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const enabledProgress = useSharedValue(0);
  const pressProgress = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor:
      variant == "primary"
        ? interpolateColor(
            enabledProgress.value,
            [0, 1],
            [theme.colors.green[50], theme.colors.green[500]]
          )
        : "",
    opacity: interpolate(pressProgress.value, [0, 1], [0.7, 1]),
  }));
  useEffect(() => {
    if (disabled || isLoading) {
      enabledProgress.value = withTiming(0,{duration:200});
      return;
    }
    enabledProgress.value = withTiming(1,{duration:200});
  }, [disabled]);
  return (
    <AnimatedPressable
      disabled={disabled || isLoading}
      style={[
        {
          ...VariantStyle(variant),
          ...containerStyle,
        },
        animatedStyles,
      ]}
      {...props}
      onPressIn={() => {
        pressProgress.value = withTiming(0);
      }}
      onPressOut={() => {
        pressProgress.value = withTiming(1);
      }}
    >
      {!isLoading && label && (
        <Text textStyle={textVariantStyle(variant)}>{label}</Text>
      )}
      {!isLoading && children}
      {isLoading && <Loader />}
    </AnimatedPressable>
  );
};

export default Button;
