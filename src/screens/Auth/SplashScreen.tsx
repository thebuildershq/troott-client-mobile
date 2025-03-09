import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomImage from '../../designSystem/components/Images/Images';
import customStyles from '../../assets/styles/custom';
import { IMAGES } from '../../assets/images/images'; // Ensure IMAGES is imported

const SplashScreen = () => {
  return (
    <SafeAreaView style={customStyles.container}>
      <CustomImage source={IMAGES.troottLogo} style={customStyles.logo} />
    </SafeAreaView>
  );
};

export default SplashScreen;
