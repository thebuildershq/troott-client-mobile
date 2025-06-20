import {  Platform } from "react-native";
import React, { useCallback, useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import TrackPlayer from "react-native-track-player";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { matterFonts } from "@/utils/constant.util";
import * as NavigationBar from "expo-navigation-bar";
import { useFonts } from "expo-font";
import { TrackPlayerService } from "@/services/player/playback-service";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/query-client";
import { MiniPlayer } from "@/components/tracks";
import FullPlayerTrackDetails from "@/components/tracks/full-player";
import CustomSplashScreen from "@/components/splash";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PortalHost } from "@/components/ui/portal";

SplashScreen.hideAsync();

const RootLayout = () => {
  if (Platform.OS === "android") {
    NavigationBar.setBackgroundColorAsync("black");
  }

  const [fontsLoaded, fontError] = useFonts(matterFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <CustomSplashScreen />;
  }

  if (fontError) {
    console.error("Font loading error:", fontError);
    return null;
  }
  TrackPlayer.registerPlaybackService(() => TrackPlayerService);

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "black",
              },
              // animation:'slide_from_right'
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen
              name="auth"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen name="onboarding" />
            <Stack.Screen
              name="track"
              options={{
                presentation: "containedTransparentModal",
                animation: "slide_from_bottom",
                contentStyle: {
                  height:600
                },
              }}
            />
          </Stack>
          <MiniPlayer />
          <FullPlayerTrackDetails />
          <StatusBar style="light" />
          <PortalHost/>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default RootLayout;
