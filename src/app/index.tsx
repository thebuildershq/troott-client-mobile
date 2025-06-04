
import React from 'react'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'
import { Redirect } from 'expo-router'

const IndexScreen = () => {
  if(true){
    return <Redirect href={'/(tabs)/home'}/>
  }
  return (
   <WelcomeScreen/>
  )
}

export default IndexScreen