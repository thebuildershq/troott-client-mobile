import { Image, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../ui/text";
import { SeeMore } from "../navigation";
import { theme } from "@/constants/theme";
import { FlashList } from "@shopify/flash-list";
import { TrackCard } from "../tracks";

const MoreFromPreacher = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("@/assets/images/2.jpg")}
          />
          <View style={{ gap: theme.sizes.spacing.sm }}>
            <Text>More From</Text>
            <Text color="#fff" weight="semibold" size="md">
              Pastor Sam Adeyemi
            </Text>
          </View>
        </View>
        <SeeMore />
      </View>
      <FlashList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item, index) => index + "more"}
        horizontal
        snapToInterval={theme.sizes.screen.width * 0.6}
        showsHorizontalScrollIndicator={false}
        decelerationRate={-1}
        estimatedItemSize={290}
        renderItem={({ item, index }) => (
          <TrackCard
            title="Beauty for ashes"
            image={require("@/assets/images/cover2.jpg")}
            duration="23:12"
            preacher="Apostle Joshua Selman"
            variant="large"
            cardStyle={{
              marginRight: theme.sizes.spacing.md,
              width: theme.sizes.screen.width * 0.7,
            }}
          />
        )}
      />
    </View>
  );
};

export default MoreFromPreacher;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    gap: theme.sizes.spacing.lg,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: theme.sizes.radius.full,
  },
});
