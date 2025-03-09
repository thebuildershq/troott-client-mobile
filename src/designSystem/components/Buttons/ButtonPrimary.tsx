import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { IButton } from "../../../utils/components.types";
import { spacing } from "../../theme/spacing";
import { palette } from "../../theme/palette";
import { fonts } from "../../theme/font";

export const Button = ({
    title,
    disabled,
    loading,
    onPress,
    alignSelf,
    style,
    textProps,
    backgroundColor = "lightBlue",
    color = "white",
    left,
    right,
    borderRadius,
    padding = "space-16",
    paddingHorizontal = "space-24",
    paddingVertical = "space-16",
    ...props
  }: IButton) => {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled || loading}>
        <View
          style={[
            {
              padding: spacing[padding],
              marginVertical: spacing["space-8"],
              opacity: disabled ? 0.6 : 1,
              borderRadius: spacing["space-32"],
              alignItems: "center",
              alignSelf,
              paddingHorizontal: alignSelf ? spacing[paddingHorizontal] : 130,
              paddingVertical: alignSelf ? spacing["space-8"] : 23,
              backgroundColor: palette[backgroundColor],
            },
            style,
          ]}
          {...props}
        >
          {loading ? (
            <ActivityIndicator color={palette[color]} />
          ) : (
            <View style={left || right ? { flexDirection: "row", gap: 10 } : {}}>
              {left}
              <Text
                style={[
                  !!color ? { color: palette[color] } : {},
                  { fontFamily: fonts.family.matterBold },
                ]}
                {...textProps}
              >
                {title}
              </Text>
              {right}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };