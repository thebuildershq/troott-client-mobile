import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import customStyles from "../assets/styles/custom";
import { View } from "react-native";

const Error = () => {
  return (
    <SafeAreaView style={customStyles.container}>
      <View>error</View>;
    </SafeAreaView>
  );
};

export default Error;
