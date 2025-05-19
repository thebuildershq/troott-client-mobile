import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import React, { useEffect, useCallback } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { setNavigationRef } from "../api/config";
import { matterFonts } from "../utils/constant.util";
import { AppProvider } from "../context/app.context";


const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

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

  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    setNavigationRef(navigationRef);
  }, [navigationRef]);


  return (
    <>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={navigationRef}>
          <AuthStack />
          {/* <AppStack /> */}
        </NavigationContainer>
      </QueryClientProvider>
      </AppProvider>
    </>
    
  );
};

export default Router;
