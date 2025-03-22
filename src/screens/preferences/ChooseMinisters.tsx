import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import customStyles from "../../assets/styles/custom";

const SelectMinisters = () => {
  return (
    <SafeAreaView style={customStyles.container}>
      <View>
        <Text style={customStyles.text}>Onboarding: select mins</Text>
      </View>
    </SafeAreaView>
  );
};

export default SelectMinisters;
