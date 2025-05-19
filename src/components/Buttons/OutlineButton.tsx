import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "../Player/Text";
import { palette } from "../../designSystem/theme/palette";
import { spacing } from "../../designSystem/theme/spacing";

export const OutlineButton = ({
  currentValue,
  value,
  onPress,
}: {
  currentValue: string;
  value: string;
  onPress: (value: string) => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.genderButton,
        value === currentValue && { backgroundColor: palette["white"] },
      ]}
      onPress={() => onPress(currentValue)}
    >
      <Text
        color={
          value === currentValue
            ? palette["baseGreen"]
            : (palette["white"] as any)
        }
        fontFamily="matterMedium"
        fontSize="space-16"
      >
        {currentValue}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genderButton: {
    borderWidth: 1,
    borderColor: palette["white"],
    borderRadius: spacing["space-24"],
    paddingVertical: spacing["space-12"],
    paddingHorizontal: spacing["space-20"],
  },
});

