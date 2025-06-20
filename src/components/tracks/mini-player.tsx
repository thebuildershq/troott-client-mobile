import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Text from "../ui/text";
import { useTrackStore } from "@/store/track";
import { Image } from "react-native";
import { Heart, Next, Pause } from "iconsax-react-nativejs";
import { SolidIcons } from "@/assets/icons";
import { useProgress } from "react-native-track-player";
import { theme } from "@/constants/theme";

const MiniPlayer = () => {
  const { currentTrack, setShowFullPlayer, showFullPlayer } = useTrackStore();
  const progress = useProgress();
  if (!currentTrack || showFullPlayer) {
    // If the mini player is not supposed to be shown or there is no current track, return null
    // This prevents rendering the mini player when it is not needed
    // or when there is no track to display
    return null;
  }
  const { title, preacher, image } = currentTrack;
  function handleMiniPlayerPress() {
    setShowFullPlayer(true);
  }

  return (
    <Pressable onPress={handleMiniPlayerPress} style={styles.container}>
      <View style={styles.imageAndTitleContainer}>
        <Image style={styles.image} source={image as ImageSourcePropType} />
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} size="base" color="#fff">
            {title}
          </Text>
          <Text numberOfLines={1} size="xs">
            {preacher}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <Pressable>
          <Heart color="#fff" />
        </Pressable>
        <Pressable>
          <SolidIcons.PauseIcon color="#fff" />
        </Pressable>
        {/* <Pressable>
          <SolidIcons.PlayIcon color={"#fff"} />
        </Pressable> */}
        <Pressable>
          <Next color="#fff" variant="Bold" />
        </Pressable>
      </View>

      {/* progress duration container */}
      <View
        style={{
          width: progress.duration
            ? `${(progress.position / progress.duration) * 100}%`
            : "1%",
          height: 3,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <View style={styles.progress} />
    </Pressable>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  imageAndTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "40%",
  },
  titleContainer: {
    gap: 5,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#545454",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 90,
    left: 0,
    right: 0,
  },
  progress: {
    position: "absolute",
    bottom: 0,
    left: -5,
    right: -5,
    height: 3,
    backgroundColor: theme.colors.grey[300],
  },
});
