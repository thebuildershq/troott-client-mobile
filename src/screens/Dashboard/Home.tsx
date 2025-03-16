import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import customStyles from '../../assets/styles/custom'

const Home = () => {
  return (
    <SafeAreaView style={customStyles.container}>
    <View>
      <Text style={customStyles.text}>
        Home: dashboard
      </Text>
    </View>
    </SafeAreaView>
  )
}

export default Home