import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthRoot from '../../designSystem/layouts/AuthRoot';
import customStyles from '../../assets/styles/custom';

const EnterEmail = () => {
  return (
    <SafeAreaView>
      <AuthRoot>
        <Text style={customStyles.text}>Enter Email Screen</Text>
        
      </AuthRoot>
    </SafeAreaView>
  );
}

export default EnterEmail
