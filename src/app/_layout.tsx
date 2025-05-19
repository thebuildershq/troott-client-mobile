import { View, Text, Platform } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import {SplashScreen, Stack} from 'expo-router'
import TrackPlayer from 'react-native-track-player';
import { TrackPlayerService } from '../services/PlaybackService';
import 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar';
import { matterFonts } from '@/utils/constant.util';
import * as NavigationBar from 'expo-navigation-bar'
import { useFonts } from 'expo-font';

const RootLayout = async() => {
  if(Platform.OS=="android"){
    NavigationBar.setBackgroundColorAsync('black')
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
      return null;
    }
  
    if (fontError) {
      console.error("Font loading error:", fontError);
      return null;
    }
  
  return (
    <React.Fragment>
          <Stack screenOptions={{
      headerShown:false,
      contentStyle:{
        backgroundColor:'black'
      },
      animation:'slide_from_right'
    }}
    >
      <Stack.Screen name='index'/>
      <Stack.Screen name='auth' options={{
        presentation:'modal'
      }}/>
    </Stack>
    <StatusBar style='light'/>
    </React.Fragment>
  )
}

export default RootLayout