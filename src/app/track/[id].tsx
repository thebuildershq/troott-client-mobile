import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import ScreenView from "@/components/ui/screenview";
import Text from "@/components/ui/text";
import { TrackDetailsHeader } from "@/components/track-detail-screen";
import { theme } from "@/constants/theme";
import Button from "@/components/ui/button";
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
import { addTracks, setupPlayer } from "@/services/player/setup-player";
import TrackPlayer from "react-native-track-player";

const TrackDetails = () => {
    useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();
      if(isSetup && queue.length >= 0) {
        console.log(queue)
        await addTracks();
        TrackPlayer.play()
      }
    }

    setup();
    return () => {
      TrackPlayer.stop();
    };
  }, []);
  return (
    <ScreenView>
      <TrackDetailsHeader />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{gap:theme.sizes.spacing.xl}}>
        <View>
          <Image
            source={require("@/assets/images/cover.jpg")}
            style={styles.image}
          />
        </View>
        <TrackActionsController />
        <TrackProgress />
        <SermonDetails/>
      </ScrollView>
    </ScreenView>
  );
};

function TrackActionsController() {
  return (
    <View style={styles.actionContainer}>
      <View style={{ gap: theme.sizes.spacing.xs }}>
        <Text color="#fff" size="md" weight="semibold">
          Beauty For Ashes
        </Text>
        <Text>Apostle Joshua Selman</Text>
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
  return (
    <View style={{ gap: theme.sizes.spacing.sm }}>
      <Slider
        minimumTrackTintColor="white"
        maximumTrackTintColor={theme.colors.grey[400]}
    
      />
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
          <Pressable>
            <Previous color="#fff" variant="Bold" />
          </Pressable>
          <Pressable style={styles.playBtn}>
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
          <Pressable>
            <Next color="#fff" variant="Bold" />
          </Pressable>
        </View>
       <Pressable>
         <Repeat color="#fff"/>
       </Pressable>
      </View>
    </View>
  );
}

function SermonDetails(){
  return(
    <View style={{
      gap:theme.sizes.spacing.md,
      marginTop:30
    }}>
      <Text size="md" color="#fff" weight="medium">Sermon Details</Text>
      <View style={{
        flexDirection:'row',
        gap:theme.sizes.spacing.md,
        alignItems:'center'
      }}>
        <Image source={require('@/assets/images/cover2.jpg')} style={{
          height:80,
          width:80,
          borderRadius:theme.sizes.radius.sm
        }}/>
        <View style={{gap:theme.sizes.spacing.xs}}>
          <Text weight="medium" color="#fff" size="base">God of Miracles</Text>
          <Text>Apostle Joshua Selman</Text>
          <Text size="xs">3.7M plays . 2.51</Text>
        </View>
      </View>
    </View>
  )
}

export default TrackDetails;

const styles = StyleSheet.create({
  container: {},
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
