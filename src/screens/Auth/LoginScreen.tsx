import { Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import customStyles from "../../assets/styles/custom";
import AuthRoot from "../../designSystem/layouts/AuthRoot";
import OAuth from "../../designSystem/layouts/OAuth";
import AuthHeader from "../../designSystem/layouts/AuthHeader";

import Icon from "react-native-vector-icons/FontAwesome";
import { palette } from "../../designSystem/theme/palette";
import { INavigation } from "../../utils/type.util";
 import CustomTextInput from "../../designSystem/components/Input/TextInput";
import PasswordInput from "../../designSystem/components/Input/PasspwordInput";
import { Button } from "../../designSystem/components/Buttons/Button";
import { spacing } from "../../designSystem/theme/spacing";
import componentStyles from "../../assets/styles/components";
//import CustomTextInput from "../../designSystem/components/Input/CustomTextInput";

const LoginScreen = () => {
  const navigation = useNavigation<INavigation>();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    return
  }

  return (
    <SafeAreaView>
      <AuthRoot>
        <View>
          <AuthHeader />

          <View style={customStyles.mt20}></View>

          <View>
            <CustomTextInput
              id="email"
              label="Email Address"
              placeholder="Enter your email"
              value={text}
              secureTextEntry={false}
              onChangeText={(val) => setText(val)}
              keyboardType="default"
              variant="outline"
              disabled={false}
              rightIcon={<Icon name="check" size={16} color={palette.white} />}
              backgroundColor={palette.grey700}
              leftIcon={<Icon name="envelope" size={16} color={palette.white} />}
            />
          </View>

          <View style={customStyles.mt20}></View>

          <View>
            <PasswordInput
            id="password"
            label="Password"
            key={"paswword"}
            placeholder="Enter your password"
            value={password}
            secureTextEntry={true}
            onChangeText={(val) => setPassword(val)}
            keyboardType="default"
            variant="outline"
            disabled={false}
            borderRadius={spacing.space64}
            showPasswordIcon={<Icon name="eye" size={20} color="gray" />}
            hidePasswordIcon={<Icon name="eye-slash" size={20} color="gray" />}
            backgroundColor={palette.grey700}
            leftIcon={<Icon name="lock" size={18} color={palette.grey100} />}
            />
            
          </View>

          <View style={customStyles.mt20}></View>

          <View>
            <Text style={componentStyles.urlText}>Forgot Password?</Text>
          </View>

          <Button 
          title="Continue"
          onPress={handleSubmit}
          paddingVertical={spacing.space18}
          disabled={false}
          loading={false}
          borderRadius={spacing.space4}

          ></Button>

          

          <View style={customStyles.mt5}></View>
          <OAuth />
        </View>
      </AuthRoot>
    </SafeAreaView>
  );
};

export default LoginScreen;
