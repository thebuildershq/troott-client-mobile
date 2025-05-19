import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import customStyles from "../../assets/styles/custom";
import { useNavigation } from "@react-navigation/native";
import { INavigation } from "../../utils/type.util";
import TermsAndConditions from "../../designSystem/containers/Auth/TermsConditions";

import SignUpform from "@/components/forms/signup-form";
import { theme } from "@/constants/theme";
import { SharedHeader } from "@/components/shared";
import ScreenView from "@/components/ui/screenview";

const RegisterScreen = () => {
  const navigation = useNavigation<INavigation>();


  return (
    <ScreenView style={styles.container}>
          <SharedHeader title="Create Account"/>
          <SignUpform/>
          <TermsAndConditions />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:theme.sizes.spacing.md
  }
})

export default RegisterScreen;
