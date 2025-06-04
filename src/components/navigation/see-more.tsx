import { StyleSheet } from "react-native";
import React from "react";
import Button from "../ui/button";
import Text from "../ui/text";
import { theme } from "@/constants/theme";

const SeeMore = ({ onPress }: { onPress?: () => void }) => {
  return (
    <Button variant="outline" containerStyle={styles.seeMore} onPress={onPress}>
      <Text size="xs" color="#fff">
        See more
      </Text>
    </Button>
  );
};

export default SeeMore;

const styles = StyleSheet.create({
  seeMore: {
    borderRadius: theme.sizes.radius.full,
    width: "auto",
    paddingHorizontal: theme.sizes.spacing.base,
    height: "auto",
    paddingVertical: theme.sizes.spacing.base,
    borderColor: theme.colors.grey[400],
  },
});
