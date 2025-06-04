import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ScreenView from "@/components/ui/screenview";
import Text from "@/components/ui/text";
import { Notification } from "iconsax-react-nativejs";
import { theme } from "@/constants/theme";
import { LikedTracks, TrackCard } from "@/components/tracks";
import SavedTracks from "@/components/tracks/saved-tracks";
import Button from "@/components/ui/button";
import { FlashList } from "@shopify/flash-list";
import { TransformArray } from "@/utils/transform-array";
import { MoreFromPreacher, TrendingPlaylist } from "@/components/home";

const Home = () => {
  return (
    <ScreenView>
       
      {/* header section */}
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: theme.sizes.spacing.xl,  paddingBottom:100 }}
      >
       <Header />
        {/* continue listening */}
        <ContinueListening />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <LikedTracks />
          <SavedTracks />
        </View>
        <SermonsForYou />
        <MoreFromPreacher/>
        <TrendingPlaylist/>
      </ScrollView>
    </ScreenView>
  );
};

function Header() {
  return (
    <View style={styles.header}>
      <Pressable style={{ alignItems: "flex-end" }}>
        <Notification color="white" size={28} variant="Bold" />
      </Pressable>
      <View style={{ gap: theme.sizes.spacing.sm }}>
        <Text size="xl" weight="medium" color="white">
          Good Morning,
        </Text>
        <Text size="xl" weight="medium" color="white">
          Tobe
        </Text>
      </View>
    </View>
  );
}

function ContinueListening() {
  return (
    <View>
      <Text size="base" weight="semibold" color="#fff">
        Continue Listening
      </Text>
    </View>
  );
}

function SermonsForYou() {
  return (
    <View style={{gap:theme.sizes.spacing.md}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text size="md" color="#fff" weight="semibold">
          Sermons for you
        </Text>
        <Button variant="outline" containerStyle={styles.seeMore}>
          <Text size="xs" color="#fff">
            See more
          </Text>
        </Button>
      </View>
      <FlashList
        data={TransformArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])}
        keyExtractor={(item, index) => index + "group"}
        horizontal
        snapToInterval={theme.sizes.screen.width * .8}
        showsHorizontalScrollIndicator={false}
        decelerationRate={-1}
        estimatedItemSize={290}
        renderItem={({ item, index }) => (
          <View style={{gap:10,marginRight:10,}}>
            {item.map((_, index) => (
              <TrackCard
                key={index+'track'}
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
}
export default Home;

const styles = StyleSheet.create({
  header: {
    gap: theme.sizes.spacing.md + 4,
  },
  scrollContainer: {
    flex: 2,
    height:'100%',
  },
  seeMore: {
    borderRadius: theme.sizes.radius.full,
    width: "auto",
    paddingHorizontal: theme.sizes.spacing.base,
    height: "auto",
    paddingVertical: theme.sizes.spacing.base,
    borderColor: theme.colors.grey[400],
  },
});
