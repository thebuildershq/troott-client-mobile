import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { IWelcomeScreen } from "../../utils/interface.utl";
import customStyles from "../../assets/styles/custom";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGES } from "../../assets/images/images";
import CustomImage from "../../designSystem/components/Images/Images";
import  Button  from "../../designSystem/components/Buttons/Button";
import { spacing } from "../../designSystem/theme/spacing";
import { palette } from "../../designSystem/theme/palette";

const WelcomeScreen = (props: IWelcomeScreen) => {
  const { navigation } = props;

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleCreateAccount = () => {
    setIsCreatingAccount(true);
    setTimeout(() => {
      navigation.navigate("EnterEmail");
      setIsCreatingAccount(false);
    }, 2000);
  };

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      navigation.navigate("Login");
      setIsLoggingIn(false);
    }, 2000);
  };

  return (
    <>
      <SafeAreaView style={customStyles.WelcomeScreenContainer}>
        <ScrollView>
          <View style={customStyles.WelcomeScreenView}>
            <Image source={IMAGES.ministersGroup} />
            <CustomImage
              source={IMAGES.png}
              style={customStyles.WelcomeScreenLogo}
            />
            <Text style={customStyles.WelcomeScreenText}>
              Experience sermons the way they {"\n"} were meant to be heard,
              ad-free.{" "}
            </Text>
          </View>

          <View style={customStyles.mt30}>
            <Button
              title="Create Account"
              variant="primary"
              paddingVertical={spacing.space16}
              borderRadius={spacing.space4}
              onPress={handleCreateAccount}
              disabled={isCreatingAccount}
              loading={isCreatingAccount}
            />

            <Button
              title="Login"
              variant="outline"
              backgroundColor={palette.baseWhite}
              paddingVertical={spacing.space16}
              borderRadius={spacing.space4}
              onPress={handleLogin}
              loading={isLoggingIn}
              disabled={isLoggingIn}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;
