import { Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import componentStyles from "../../assets/styles/components";
import customStyles from "../../assets/styles/custom";
import { Button } from "../components/Buttons/Button";
import { palette } from "../theme/palette";
import { spacing } from "../theme/spacing";

const OAuth = () => {
  const signInWithGoogle = async () => {
    try {
      console.log("Google Sign-In Triggered");
      // TODO: Implement Google Authentication logic here
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const signInWithApple = async () => {
    try {
      console.log("Apple Sign-In Triggered");
      // TODO: Implement Apple Authentication logic here
    } catch (error) {
      console.error("Apple Sign-In Error:", error);
    }
  };

  return (
    <View style={customStyles.mt10}>
      <View style={componentStyles.OrCongtainer}>
        <View style={componentStyles.line} />
        <Text style={componentStyles.orText}>or</Text>
        <View style={componentStyles.line} />
      </View>

      <View style={customStyles.mt25}></View>
      <Button
        title="Sign in with Apple"
        variant="outline"
        left={
          <Icon
            name="apple"
            size={20}
            color="white"
            style={componentStyles.icon}
          />
        }
        backgroundColor={palette.baseWhite}
        paddingVertical={spacing.space16}
        borderRadius={spacing.space4}
        onPress={signInWithApple}
        loading={false}
        disabled={false}
      />

      <Button
        title="Continue with Google"
        variant="outline"
        left={
          <Icon
            name="google"
            size={20}
            color="white"
            style={componentStyles.icon}
          />
        }
        backgroundColor={palette.baseWhite}
        paddingVertical={spacing.space16}
        borderRadius={spacing.space4}
        onPress={signInWithGoogle}
        loading={false}
        disabled={false}
      />
    </View>
  );
};

export default OAuth;
