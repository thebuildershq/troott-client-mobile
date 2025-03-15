import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthRoot from "../../designSystem/layouts/AuthRoot";
import customStyles from "../../assets/styles/custom";
import { useNavigation } from "@react-navigation/native";
import { INavigation } from "../../utils/type.util";
import TermsAndConditions from "../../designSystem/layouts/TermsConditions";
import { spacing } from "../../designSystem/theme/spacing";
import Button from "../../designSystem/components/Buttons/Button";
import OTPInput from "../../designSystem/components/Input/OTPInput";
import ChangeData from "../../designSystem/layouts/ChangeData";
import ResendCode from "../../designSystem/layouts/ResendCode";

const VerificationScreen = () => {
  const navigation = useNavigation<INavigation>();

  const [otp, setOTP] = useState("");
  const [registerUser, setRegisterUser] = useState(false);

  const handleSubmit = () => {
    setRegisterUser(true);
    setTimeout(() => {
      navigation.navigate("Welcome");
      setRegisterUser(false);
    }, 2000);
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <AuthRoot>
          <View>
            <ChangeData />

            <View style={[customStyles.mt20]}></View>

            <View>
              <OTPInput
                id="otp"
                label="Enter OTP"
                key={"otp"}
                value={otp}
                onChangeText={(val) => setOTP(val)}
                onSubmit={() => handleSubmit()}
                disabled={false}
                borderRadius={spacing.space64}
              />
            </View>

            <TermsAndConditions />

            <View style={customStyles.mt15}></View>

            <Button
              title="Continue"
              variant="primary"
              onPress={handleSubmit}
              paddingVertical={spacing.space18}
              disabled={registerUser || otp.length < 6}
              loading={registerUser}
              borderRadius={spacing.space4}
            ></Button>

            <ResendCode/>
          </View>
        </AuthRoot>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default VerificationScreen;
