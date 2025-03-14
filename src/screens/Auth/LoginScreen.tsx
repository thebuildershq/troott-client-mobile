import { View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import customStyles from "../../assets/styles/custom";
import AuthRoot from "../../designSystem/layouts/AuthRoot";
import OAuth from "../../designSystem/layouts/OAuth";
import AuthHeader from "../../designSystem/layouts/AuthHeader";
import CustomTextInput from "../../designSystem/components/Input/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome";
import { palette } from "../../designSystem/theme/palette";
import { INavigation } from "../../utils/type.util";

const LoginScreen = () => {
  const navigation = useNavigation<INavigation>();
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <AuthRoot>
        <View>
          <AuthHeader />

          <View style={customStyles.mt20}></View>

          <View>
            <CustomTextInput
              value={text}
              id="email"
              placeholder="Enter your email"
              secureTextEntry={false}
              onChangeText={(val) => setText(val)}
              keyboardType="default"
              variant="outline"
              disabled={false}
              backgroundColor={palette.grey700}
              leftIcon={<Icon name="envelope" size={16} color={palette.grey100} />}
            />
          </View>

          <View style={customStyles.mt5}></View>
          <OAuth />
        </View>
      </AuthRoot>
    </SafeAreaView>
  );
};

export default LoginScreen;
