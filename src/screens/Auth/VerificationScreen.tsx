import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthRoot from '../../designSystem/layouts/AuthRoot';
import customStyles from '../../assets/styles/custom';

const VerificationScreen = () => {
  return (
    <SafeAreaView>
      <AuthRoot>
        <Text style={customStyles.text}>Verification Screen</Text>
        
      </AuthRoot>
    </SafeAreaView>
  );
}

export default VerificationScreen