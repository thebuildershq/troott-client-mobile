import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../ui/text";
import PlayList from "../tracks/playlist";
import { Tracks } from "@/mock";
import { theme } from "@/constants/theme";

const TrendingPlayList = () => {
  return (
    <View style={styles.container}>
      <Text size="md" color="#fff" weight="semibold">
        Trending Playlist
      </Text>
      <PlayList
        title="Joy in the journey"
        church="Koinonia Minstry"
        tracks={Tracks}
        description="Ain’t no journey like a faith journey. Soundtracking your spiritual growth with sermons that uplift!"
      />
      <PlayList
        title="Our heavenly home"
        church="Koinonia Minstry"
        tracks={Tracks}
        description="The most streamed sermons and must hear messages"
        cardStyle={{
          backgroundColor: "#2F1516",
        }}
      />
    </View>
  );
};

export default TrendingPlayList;

const styles = StyleSheet.create({
  container: {
    gap: theme.sizes.spacing.lg,
  },
});
