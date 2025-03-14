import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import React, { useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

SplashScreen.preventAutoHideAsync();

const matterFonts = {
  "Matter-Bold": require("../assets/fonts/matter/Matter-Bold.ttf"),
  "Matter-BoldItalic": require("../assets/fonts/matter/Matter-BoldItalic.ttf"),
  "Matter-Heavy": require("../assets/fonts/matter/Matter-Heavy.ttf"),
  "Matter-HeavyItalic": require("../assets/fonts/matter/Matter-HeavyItalic.ttf"),
  "Matter-Light": require("../assets/fonts/matter/Matter-Light.ttf"),
  "Matter-LightItalic": require("../assets/fonts/matter/Matter-LightItalic.ttf"),
  "Matter-Medium": require("../assets/fonts/matter/Matter-Medium.ttf"),
  "Matter-MediumItalic": require("../assets/fonts/matter/Matter-MediumItalic.ttf"),
  "Matter-Regular": require("../assets/fonts/matter/Matter-Regular.ttf"),
  "Matter-RegularItalic": require("../assets/fonts/matter/Matter-RegularItalic.ttf"),
  "Matter-Semibold": require("../assets/fonts/matter/Matter-SemiBold.ttf"),
  "Matter-SemiboldItalic": require("../assets/fonts/matter/Matter-SemiBoldItalic.ttf"),
};

const Router = () => {
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
    return null;
  }

  if (fontError) {
    console.error("Font loading error:", fontError);
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <AuthStack />
        {/* <AppStack /> */}
      </NavigationContainer>
    </>
  );
};

export default Router;
