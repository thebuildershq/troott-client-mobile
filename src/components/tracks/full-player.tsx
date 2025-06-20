import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Text from "@/components/ui/text";
import { TrackDetailsHeader } from "@/components/track-detail-screen";
import { theme } from "@/constants/theme";

import {
  DocumentDownload,
  Heart,
  Next,
  Previous,
  Repeat,
  Send,
  Shuffle,
} from "iconsax-react-nativejs";
import { SolidIcons } from "@/assets/icons";
import Slider from "@react-native-community/slider";

import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
  useProgress,
  Track,
} from "react-native-track-player";
import {
  getCurrentTrack,
  getPlaybackState,
  getTrackState,
  playButton,
  seekTo,
  skipToNext,
  skipToPrevious,
} from "@/services/player/controls";
import { useTrackStore } from "@/store/track";
import { TrackCardProps } from "./types";
import Animated, { SlideInDown, SlideInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FullPlayerTrackDetails = () => {
  const { showFullPlayer, currentTrack } = useTrackStore((state) => state);
    const {top} = useSafeAreaInsets()
  if (!showFullPlayer) {
    return null;
  }
  //   const [track, setTrack] = React.useState<Track | null>(null);
  const events = [Event.PlaybackActiveTrackChanged, Event.PlaybackState];

  //   useTrackPlayerEvents(events, async (event) => {
  //     if (event.type === Event.PlaybackState) {
  //       const state = await getPlaybackState();
  //       if (state === State.Playing) {
  //         const currentTrack = await getCurrentTrack();
  //         if (currentTrack) {
  //           console.log(currentTrack, "current track");
  //           setTrack(currentTrack);
  //         }
  //       }
  //     }
  //     if (event.type === Event.PlaybackActiveTrackChanged) {
  //       const track = await getCurrentTrack();
  //       if (track) {
  //         setTrack(track);
  //       }
  //     }
  //   });

  return (
    <Animated.View
      entering={SlideInDown.duration(500)}
    //   exiting={SlideInUp.duration(500)}
      style={[styles.container,{paddingTop: top}]}
    >
      <TrackDetailsHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: theme.sizes.spacing.xl }}
      >
        <View>
          <Image
            source={currentTrack?.image || require("@/assets/images/cover.jpg")}
            style={styles.image}
          />
        </View>
        <TrackActionsController track={currentTrack} />
        <TrackProgress />
        <SermonDetails />
      </ScrollView>
    </Animated.View>
  );
};

function TrackActionsController({
  track,
}: {
  track: Partial<TrackCardProps> | null;
}) {
  return (
    <View style={styles.actionContainer}>
      <View style={{ gap: theme.sizes.spacing.sm, width: "40%" }}>
        <Text color="#fff" size="md" weight="semibold" numberOfLines={1}>
          {track?.title || "Track Title"}
        </Text>
        <Text>{track?.preacher}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Pressable>
          <Heart color="#fff" size={24} />
        </Pressable>
        <Pressable>
          <DocumentDownload color="#fff" size={24} />
        </Pressable>
        <Pressable>
          <Send color="#fff" size={24} />
        </Pressable>
        <Pressable>
          <SolidIcons.QueueListIcon color="#fff" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

function TrackProgress() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const events = [Event.PlaybackState];
  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackState) {
      const state = await getTrackState();
      if (state === State.Playing) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    }
  });
  const progress = useProgress();
  return (
    <View style={{ gap: theme.sizes.spacing.sm }}>
      <View style={{ gap: theme.sizes.spacing.xs }}>
        <Slider
          minimumValue={0}
          maximumValue={progress.duration}
          value={progress.position}
          minimumTrackTintColor="white"
          maximumTrackTintColor={theme.colors.grey[400]}
          onValueChange={seekTo}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{`${Math.floor(progress.position / 60)}:${Math.floor(
            progress.position % 60
          )
            .toString()
            .padStart(2, "0")}`}</Text>

          <Text>
            {Math.floor(progress.duration / 60)}:
            {Math.floor(progress.duration % 60)
              .toString()
              .padStart(2, "0")}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable>
          <Shuffle color="#fff" />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: theme.sizes.spacing.xl,
          }}
        >
          <Pressable onPress={skipToPrevious}>
            <Previous color="#fff" variant="Bold" />
          </Pressable>
          <React.Fragment>
            {!isPlaying && (
              <Pressable style={styles.playBtn} onPress={playButton}>
                <SolidIcons.PlayIcon
                  color="#000"
                  size={28}
                  style={{
                    transform: [
                      {
                        translateX: 1,
                      },
                    ],
                  }}
                />
              </Pressable>
            )}

            {isPlaying && (
              <Pressable style={styles.playBtn} onPress={playButton}>
                <SolidIcons.PauseIcon
                  color="#000"
                  size={28}
                  style={{
                    transform: [
                      {
                        translateX: 1,
                      },
                    ],
                  }}
                />
              </Pressable>
            )}
          </React.Fragment>

          <Pressable onPress={skipToNext}>
            <Next color="#fff" variant="Bold" />
          </Pressable>
        </View>
        <Pressable>
          <Repeat color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

function SermonDetails() {
  return (
    <View
      style={{
        gap: theme.sizes.spacing.md,
        marginTop: 30,
      }}
    >
      <Text size="md" color="#fff" weight="medium">
        Sermon Details
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: theme.sizes.spacing.md,
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/cover2.jpg")}
          style={{
            height: 80,
            width: 80,
            borderRadius: theme.sizes.radius.sm,
          }}
        />
        <View style={{ gap: theme.sizes.spacing.xs }}>
          <Text weight="medium" color="#fff" size="base">
            God of Miracles
          </Text>
          <Text>Apostle Joshua Selman</Text>
          <Text size="xs">3.7M plays . 2.51</Text>
        </View>
      </View>
    </View>
  );
}

export default FullPlayerTrackDetails;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1000,
    backgroundColor: "#000",
    padding: theme.sizes.spacing.md,
    gap: theme.sizes.spacing.xl,
  },
  image: {
    height: theme.sizes.screen.height * 0.4,
    borderRadius: theme.sizes.radius.md,
    width: "100%",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.sizes.spacing.md,
  },
  playBtn: {
    backgroundColor: "#fff",
    padding: theme.sizes.spacing.md,
    borderRadius: theme.sizes.radius.full,
  },
});
