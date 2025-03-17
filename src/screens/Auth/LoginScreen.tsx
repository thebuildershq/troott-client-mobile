import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import customStyles from "../../assets/styles/custom";
import AuthRoot from "../../designSystem/layouts/AuthRoot";
import OAuth from "../../designSystem/containers/OAuth";
import AuthHeader from "../../designSystem/containers/AuthHeader";
import Icon from "react-native-vector-icons/FontAwesome";
import { palette } from "../../designSystem/theme/palette";
import { INavigation } from "../../utils/type.util";
import CustomTextInput from "../../designSystem/components/Input/TextInput";
import PasswordInput from "../../designSystem/components/Input/PasspwordInput";
import Button from "../../designSystem/components/Buttons/Button";
import { spacing } from "../../designSystem/theme/spacing";
import componentStyles from "../../assets/styles/components";

const LoginScreen = () => {
  const navigation = useNavigation<INavigation>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setLoginUser] = useState(false);

  const handleSubmit = () => {
    setLoginUser(true);
    setTimeout(() => {
      navigation.navigate("Explore");
      setLoginUser(false);
    }, 2000);
  };

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
              value={email}
              secureTextEntry={false}
              onChangeText={(val) => setEmail(val)}
              keyboardType="default"
              variant="outline"
              disabled={false}
              backgroundColor={palette.grey700}
              leftIcon={
                <Icon name="envelope" size={16} color={palette.grey400} />
              }
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
              showPasswordIcon={
                <Icon name="eye" size={20} color={palette.grey400} />
              }
              hidePasswordIcon={
                <Icon name="eye-slash" size={20} color={palette.grey400} />
              }
              backgroundColor={palette.grey700}
              leftIcon={<Icon name="lock" size={18} color={palette.grey400} />}
            />
          </View>

          <View style={customStyles.mt20}></View>

          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={componentStyles.urlText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={customStyles.mt5}></View>

          <Button
            title="Continue"
            variant="primary"
            onPress={handleSubmit}
            paddingVertical={spacing.space18}
            disabled={loginUser}
            loading={loginUser}
            borderRadius={spacing.space4}
          ></Button>

          <OAuth />
        </View>
      </AuthRoot>
    </SafeAreaView>
  );
};

export default LoginScreen;
