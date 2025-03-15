import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthRoot from "../../designSystem/layouts/AuthRoot";
import customStyles from "../../assets/styles/custom";
import { useNavigation } from "@react-navigation/native";
import { INavigation } from "../../utils/type.util";
import AuthHeader from "../../designSystem/layouts/AuthHeader";
import TermsAndConditions from "../../designSystem/layouts/TermsConditions";
import CustomTextInput from "../../designSystem/components/Input/TextInput";
import Icon from "react-native-vector-icons/FontAwesome";
import { palette } from "../../designSystem/theme/palette";
import PasswordInput from "../../designSystem/components/Input/PasspwordInput";
import { spacing } from "../../designSystem/theme/spacing";
import Button from "../../designSystem/components/Buttons/Button";
import componentStyles from "../../assets/styles/components";

const RegisterScreen = () => {
  const navigation = useNavigation<INavigation>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <AuthRoot>
        <View>
          <AuthHeader />

          <View style={[customStyles.mt20]}></View>

          <View style={componentStyles.rowContainer}>
            <CustomTextInput
              id="firstname"
              label="First Name"
              placeholder="paul"
              value={firstName}
              paddingVertical={spacing.space16}
              secureTextEntry={false}
              onChangeText={(val) => setFirstName(val)}
              keyboardType="default"
              variant="outline"
              disabled={false}
              backgroundColor={palette.grey700}
              style={{width: "49%"}}
              leftIcon={
                <Icon name="user" size={16} color={palette.grey400} />
              }
            />

            <CustomTextInput
              id="lastname"
              label="Last Name"
              placeholder="Kim"
              value={lastName}
              secureTextEntry={false}
              onChangeText={(val) => setLastName(val)}
              keyboardType="default"
              variant="outline"
              disabled={false}
              backgroundColor={palette.grey700}
              style={{width: "49%"}}
              leftIcon={
                <Icon name="user" size={16} color={palette.grey400} />
              }
            />
          </View>

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

          <TermsAndConditions />

          <View style={customStyles.mt15}></View>



          <Button
            title="Continue"
            variant="primary"
            onPress={handleSubmit}
            paddingVertical={spacing.space18}
            disabled={registerUser}
            loading={registerUser}
            borderRadius={spacing.space4}
          ></Button>

        </View>
      </AuthRoot>
    </SafeAreaView>
  );
};

export default RegisterScreen;
