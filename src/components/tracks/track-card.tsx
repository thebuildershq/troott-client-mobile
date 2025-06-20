import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TrackCardProps } from "./types";
import Text from "../ui/text";
import { theme } from "@/constants/theme";
import { SolidIcons } from "@/assets/icons";
import { router } from "expo-router";
import { useTrackStore } from "@/store/track";
import TrackPlayer from "react-native-track-player";
import { addTrack } from "@/services/player/setup-player";
import { BottomSheetModal, BottomSheetRef } from "../ui/bottom-sheet-modal";
import { TrackListActions } from "./actions";

const TrackCard = ({
  title,
  variant = "small",
  preacher,
  duration,
  image,
  cardStyle,
  track_url,
}: TrackCardProps) => {
  const { setCurrentTrack, setShowFullPlayer, setShowMiniPlayer } =
    useTrackStore();
  async function handlePress() {
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    const track = {
      title,
      preacher,
      duration,
      image,
      track_url,
    };
    setCurrentTrack(track);
    addTrack(track);
    await TrackPlayer.play();
  }
  const duration_seconds = Number(duration) % 60 || 0;
  const duration_minutes = Math.floor(Number(duration) / 60) || 0;
  const sheetRef = React.useRef<BottomSheetRef>(null);
  function handleSheetOpen() {
    sheetRef.current?.open();
  }

  return (
    <View style={{  }}>
      {variant === "large" && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.largeContainer, cardStyle]}
        >
          <Image
            style={styles.imageLarge}
            source={image as ImageSourcePropType}
          />
          <View style={{ gap: theme.sizes.spacing.sm }}>
            <Text size="base" color="#fff">
              {title}
            </Text>
            <View style={styles.textContainer}>
              <Text textStyle={{ alignItems: "center" }}>{preacher}</Text>
              <View style={styles.dot} />
              <Text>
                {duration_minutes}:
                {duration_seconds.toString().padStart(2, "0")}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {variant === "small" && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.container, cardStyle]}
          onPress={handlePress}
        >
          <View style={styles.titleContainer}>
            <Image
              style={styles.imageSmall}
              source={image as ImageSourcePropType}
            />
            <View style={{ gap: theme.sizes.spacing.sm, width: "60%" }}>
              <Text size="base" color="#fff">
                {title}
              </Text>
              <View style={styles.textContainer}>
                <Text textStyle={{ alignItems: "center" }}>{preacher}</Text>
                <View style={styles.dot} />
                <Text>
                  {duration_minutes}:
                  {duration_seconds.toString().padStart(2, "0")}
                </Text>
              </View>
            </View>
          </View>
          <Pressable onPress={handleSheetOpen}>
            <SolidIcons.EllipsisVerticalIcon color={theme.colors.grey[50]} />
          </Pressable>
        </TouchableOpacity>
      )}
      <BottomSheetModal.Root ref={sheetRef}>
        <BottomSheetModal.Title>
          <View>
            <View style={styles.titleContainer}>
              <Image
                style={styles.imageSmall}
                source={image as ImageSourcePropType}
              />
              <View style={{ gap: theme.sizes.spacing.sm, width: "60%" }}>
                <Text size="base" color="#fff">
                  {title}
                </Text>
                <View style={styles.textContainer}>
                  <Text textStyle={{ alignItems: "center" }}>{preacher}</Text>
                  <View style={styles.dot} />
                  <Text>
                    {duration_minutes}:
                    {duration_seconds.toString().padStart(2, "0")}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </BottomSheetModal.Title>
        <BottomSheetModal.Content>
          {TrackListActions.map((action, index) => (
            <Pressable
              key={index + "item"}
              style={{ flexDirection:'row',gap:theme.sizes.spacing.md,paddingVertical: theme.sizes.spacing.md,alignItems:'center' }}
              onPress={() => {
                action.action?.();
                sheetRef.current?.close();
              }
              }
            >
              {
                action.icon
              }
              <Text color="white" size="sm">
                {action.label}
              </Text>
            </Pressable>
          ))}
        </BottomSheetModal.Content>
      </BottomSheetModal.Root>
    </View>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: theme.sizes.spacing.base,
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[600],
    width: theme.sizes.screen.width * 0.8,
  },
  imageSmall: {
    height: 64,
    width: 64,
    borderRadius: theme.sizes.radius.sm,
  },
  titleContainer: {
    flexDirection: "row",
    gap: theme.sizes.spacing.md,
    alignItems: "center",
  },
  dot: {
    height: 4,
    width: 4,
    backgroundColor: theme.colors.grey[300],
    borderRadius: theme.sizes.radius.full,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.sizes.spacing.sm,
  },
  imageLarge: {
    width: "100%",
    height: theme.sizes.screen.height * 0.2,
    borderRadius: theme.sizes.radius.base,
  },
  largeContainer: {
    gap: theme.sizes.spacing.base,
  },
});
