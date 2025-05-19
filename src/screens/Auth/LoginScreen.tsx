import LoginForm from "@/components/forms/login-form";
import { SharedHeader } from "@/components/shared";
import ScreenView from "@/components/ui/screenview";
import TermsAndConditions from "@/designSystem/containers/Auth/TermsConditions";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const LoginScreen = () => {


  return (
    <ScreenView >
      <SharedHeader title="Log in or Create accout"/>
       <TermsAndConditions/>
      <LoginForm/>
    </ScreenView>
  );
};

export default LoginScreen;
