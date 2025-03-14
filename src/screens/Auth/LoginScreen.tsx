import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import customStyles from "../../assets/styles/custom";
import componentStyles from "../../assets/styles/components";
import AuthRoot from "../../designSystem/layouts/AuthRoot";
import Iconify from "react-native-iconify";
import { palette } from "../../designSystem/theme/palette";
import OAuth from "../../designSystem/layouts/OAuth";
import AuthHeader from "../../designSystem/layouts/AuthHeader";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <AuthRoot>
        <View>
          <AuthHeader />

          <View style={customStyles.mt5}></View>
          <OAuth />
        </View>
      </AuthRoot>
    </SafeAreaView>
  );
};

export default LoginScreen;
