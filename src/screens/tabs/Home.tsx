import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import customStyles from "../../assets/styles/custom";
import MainAppRoot from "../../designSystem/layouts/MainAppRoot";
import AppStack from "../../routes/AppStack";

const Home = () => {
  return (
    // <SafeAreaView style={customStyles.container}>
      <MainAppRoot>
        {/* <AppStack /> */}
        <View>
          <Text style={customStyles.text}>Home: dashboard</Text>
        </View>
      </MainAppRoot>
    // </SafeAreaView>
  );
};

export default Home;
