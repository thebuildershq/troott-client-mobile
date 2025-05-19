import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import customStyles from "../../assets/styles/custom";
import { IMAGES } from "../../assets/images/images";
import CustomImage from "../../components/Images/Images";
import {router} from 'expo-router'
import Button from "@/components/ui/button";
import { theme } from "@/constants/theme";

const WelcomeScreen = () => {
 const navigation = {
  navigate :(param:string)=>{}
 }

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleCreateAccount = () => {
    setIsCreatingAccount(true);
    setTimeout(() => {
      router.push('/auth')
      setIsCreatingAccount(false);
    }, 2000);
  };

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      router.push('/auth/login');
      setIsLoggingIn(false);
    }, 2000);
  };

const SCREEN_WIDTH = Dimensions.get('window').width

  return (
    <>
      <View style={[customStyles.WelcomeScreenContainer,{
      }]}>
        <ScrollView>
          <View style={customStyles.WelcomeScreenView}>
            <Image source={IMAGES.ministersGroup} style={{width:theme.sizes.screen.width,height:theme.sizes.screen.height*.6}} />
            <CustomImage
              source={IMAGES.png}
              style={customStyles.WelcomeScreenLogo}
            />
            <Text style={customStyles.WelcomeScreenText}>
              Experience sermons the way they {"\n"} were meant to be heard,
              ad-free.{" "}
            </Text>
          </View>

          <View style={[customStyles.mt30,{paddingHorizontal:10,gap:20}]}>
            <Button onPress={handleCreateAccount} disabled={isCreatingAccount} isLoading={isCreatingAccount} label="Create Account" ></Button>
            <Button label="Login" isLoading={isLoggingIn} onPress={handleLogin} variant="outline"/>
           
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default WelcomeScreen;
