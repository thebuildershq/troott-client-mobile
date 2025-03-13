import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { palette } from "../designSystem/theme/palette";
import { fonts } from "../designSystem/theme/font";
import SplashScreen from "../screens/Auth/SplashScreen";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import EnterEmail from "../screens/Auth/EnterEmail";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import VerificationScreen from "../screens/Auth/VerificationScreen";
import Review from "../screens/Review";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Create Account",
        headerStyle: { backgroundColor: palette.baseBlack },
        headerTitleAlign: "center",
        headerTintColor: palette.white,
        headerTitleStyle: { fontFamily: fonts.family.matterBold },
        contentStyle: {
          flex: 1,
          backgroundColor: palette.baseBlack,
        },
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={SplashScreen}
      />

      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="Review"
        options={{ headerShown: false }}
        component={Review}
      />

      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />

      <Stack.Screen
        name="EnterEmail"
        options={{ headerShown: false }}
        component={EnterEmail}
      />

      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={RegisterScreen}
      />

      <Stack.Screen
        name="Verification"
        options={{ headerShown: false }}
        component={VerificationScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
