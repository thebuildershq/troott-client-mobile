import { View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthRoot from "../../designSystem/layouts/AuthRoot";
import customStyles from "../../assets/styles/custom";
import AuthHeader from "../../designSystem/containers/Auth/AuthHeader";
import OAuth from "../../designSystem/containers/Auth/OAuth";
import CustomTextInput from "../../designSystem/components/Input/TextInput";
import { palette } from "../../designSystem/theme/palette";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../../designSystem/components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { INavigation } from "../../utils/type.util";
import { spacing } from "../../designSystem/theme/spacing";
import ResetSubtext from "../../designSystem/containers/Auth/ResetSubtext";
import PasswordInput from "../../designSystem/components/Input/PasspwordInput";

const ResetPassword = () => {
  const navigation = useNavigation<INavigation>();
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState(false);

  const handleSubmit = () => {
    setUserEmail(true);
    setTimeout(() => {
      navigation.navigate("Login");
      setUserEmail(false);
    }, 2000);
  };

  return (
    <SafeAreaView>
      <AuthRoot>
        <View>

          <ResetSubtext />

          <View style={customStyles.mt20}></View>

          <View>
            <PasswordInput
              id="newpassword"
              label="New Password"
              key={"paswword"}            
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

          <View>
            <PasswordInput
              id="confirmpassword"
              label="Confirm New Password"
              key={"paswword"}
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

          <View style={customStyles.mt5}></View>

          <Button
            title="Continue"
            variant="primary"
            onPress={handleSubmit}
            paddingVertical={spacing.space18}
            disabled={userEmail}
            loading={userEmail}
            borderRadius={spacing.space4}
          ></Button>

        </View>
      </AuthRoot>
    </SafeAreaView>
  );
};

export default ResetPassword;
