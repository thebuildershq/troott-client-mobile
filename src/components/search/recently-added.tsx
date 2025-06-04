import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../ui/text";
import { FlashList } from "@shopify/flash-list";
import { theme } from "@/constants/theme";
import { TrackCard } from "../tracks";
import { TransformArray } from "@/utils/transform-array";

const RecentlyAdded = () => {
  return (
    <View style={styles.container}>
      <Text size="lg" color="#fff" weight="semibold">Recently Added</Text>
      <FlashList
        data={TransformArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])}
        keyExtractor={(item, index) => index + "group"}
        horizontal
        snapToInterval={theme.sizes.screen.width * 0.8}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={290}
        decelerationRate={-1}
        renderItem={({ item, index }) => (
          <View style={{ gap: 10, marginRight: 10 }}>
            {item.map((_, index) => (
              <TrackCard
                key={index + "track"}
                title="Beauty for ashes"
                image={require("@/assets/images/cover.jpg")}
                duration="23:12"
                preacher="Apostle Joshua Selman"
                variant="small"
              />
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default RecentlyAdded;

const styles = StyleSheet.create({
    container:{
        gap:theme.sizes.spacing.md
    }
});
