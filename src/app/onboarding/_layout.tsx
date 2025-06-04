import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const OnboardingLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown:false,
        contentStyle:{
            flex:1,
            backgroundColor:'#000'
        }
    }}>
        <Stack.Screen name='select-ministers'/>
        <Stack.Screen name='select-interests'/>
    </Stack>
  )
}

export default OnboardingLayout

const styles = StyleSheet.create({})