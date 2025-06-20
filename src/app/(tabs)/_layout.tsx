import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { TabBar } from "@/components/navigation";
import { setupPlayer } from "@/services/player/setup-player";
import TrackPlayer from "react-native-track-player";

const TabsLayout = () => {
  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();
      TrackPlayer.reset();
      console.log(await TrackPlayer.getPlaybackState(), "here");
    }

    setup();
  }, []);
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { flex: 1, backgroundColor: "black" },
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="library" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
