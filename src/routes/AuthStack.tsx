import React from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { palette } from "../designSystem/theme/palette";
import { fonts } from "../designSystem/theme/font";
import SplashScreen from "../screens/Auth/SplashScreen";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import EnterEmail from "../screens/Auth/EnterEmail";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import VerificationScreen from "../screens/Auth/VerificationScreen";
import Review from "../screens/Preview";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import ResetPassword from "../screens/Auth/ResetPassword";
import ForgotPasswordCode from "../screens/Auth/ResetPasswordCode";
import SelectMinisters from "../screens/preferences/ChooseMinisters";
import ForgotPasswordEmail from "../screens/Auth/ChangePassword";
import Home from "../screens/tabs/Home";

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Title Here",
        headerStyle: { backgroundColor: palette.baseBlack },
        headerTitleAlign: "center",
        headerTintColor: palette.white,
        headerTitleStyle: { fontFamily: fonts.family.matterBold },
        contentStyle: {
          flex: 1,
          backgroundColor: palette.baseBlack,
          marginTop: -30,
        },
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color={palette.grey400} />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={SplashScreen}
      />

      <Stack.Screen
        name="Review"
        options={{
          headerShown: true,
          headerTitle: "Preview Screen",
        }}
        component={Review}
      />

      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="Login"
        options={{
          headerShown: true,
          headerTitle: "Login to your account",
        }}
        component={LoginScreen}
      />

      <Stack.Screen
        name="Email"
        options={{
          headerShown: true,
          headerTitle: "Create Your Account",
        }}
        component={EnterEmail}
      />

      <Stack.Screen
        name="Register"
        options={{
          headerShown: true,
          headerTitle: "Create Your Account",
        }}
        component={RegisterScreen}
      />

      <Stack.Screen
        name="Verification"
        options={{
          headerShown: true,
          headerTitle: "Verify your email",
        }}
        component={VerificationScreen}
      />

      <Stack.Screen
        name="ChangePassword"
        options={{
          headerShown: true,
          headerTitle: "Chnage Password",
        }}
        component={ForgotPasswordEmail}
      />

      <Stack.Screen
        name="ForgotPassword"
        options={{
          headerShown: true,
          headerTitle: "Forgot Password",
        }}
        component={ForgotPassword}
      />

      <Stack.Screen
        name="ForgotPasswordCode"
        options={{
          headerShown: true,
          headerTitle: "Verify Required",
        }}
        component={ForgotPasswordCode}
      />

      <Stack.Screen
        name="ResetPassword"
        options={{
          headerShown: true,
          headerTitle: "Reset Password",
        }}
        component={ResetPassword}
      />

      <Stack.Screen
        name="ChooseMinisters"
        options={{
          headerShown: true,
          headerTitle: "Pick Ministers you like",
        }}
        component={SelectMinisters}
      />

      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />

    </Stack.Navigator>
  );
};

export default AuthStack;
