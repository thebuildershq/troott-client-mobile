import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const TrackLayout = () => {
  return (
   <Stack screenOptions={{
    headerShown: false,
    contentStyle: {
     backgroundColor: 'transparent',
     flex: 1,
     marginTop: Platform.select(
      {
        ios: 60,
        android: 60
      }
     )
    },
   }}>
    <Stack.Screen name='user-playlist-add-track' options={{
      presentation: 'modal',
    }}/>
    <Stack.Screen name='create-playlist'/>
   </Stack>
  )
}

export default TrackLayout

const styles = StyleSheet.create({})