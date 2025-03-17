import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import customStyles from "../../assets/styles/custom";
import componentStyles from "../../assets/styles/components";
import { Container } from "lucide-react-native";

const AuthHeader = () => {
  return (
    <View>
      
      {/* <View style={customStyles.mt30}></View>
      <Text style={componentStyles.title}>Log In or Create an Account</Text> */}
      {/* <View style={customStyles.mt10}></View> */}
      <Text style={componentStyles.subText}>
        By continuing, you agree to the updated{" "}
        
        <TouchableOpacity onPress={() => console.log("Terms of Sale Clicked")}>
        <Text style={componentStyles.link}>Terms of Sale</Text>
        </TouchableOpacity>

        ,{" "}

        <TouchableOpacity onPress={() => console.log("Terms of Service Clicked")}>
        <Text style={componentStyles.link}>Terms of Service </Text>
        </TouchableOpacity>

        {" "}and{" "}

        <TouchableOpacity onPress={() => console.log("Privacy Policy Clicked")}>
        <Text style={componentStyles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        .
      </Text>

    </View>
  );
};

export default AuthHeader;