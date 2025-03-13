import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import customStyles from "../assets/styles/custom";
import { SafeAreaView } from "react-native-safe-area-context";
import componentStyles from "../assets/styles/components";
import { useNavigation } from "@react-navigation/native";
import { INavigation } from "../utils/type.util";
import { Button } from "../designSystem/components/Buttons/Button";
import { spacing } from "../designSystem/theme/spacing";

const Review = () => {
  const navigation = useNavigation<INavigation>();

  return (
    <SafeAreaView style={customStyles.container}>
      <Text style={customStyles.text}>Review components and screens here</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Create Account"
          paddingVertical={spacing.space8}
          onPress={() => console.log("Clicked!")}
          variant="utline"
          disabled={true}
          loading={false}
        />

        <Button
          title="Login"

          onPress={() => console.log("Create account Clicked!")}
          disabled={false}
          variant="opacity"
          loading={false}
        />

        <Button
          title="Login"
          onPress={() => console.log("Login Clicked!")}
          variant="outline"
          backgroundColor="white"
          color="baseBlack"
          disabled={false}
          loading={false}
          borderRadius={spacing.space2}
        />

        <TouchableOpacity
          style={componentStyles.button}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={componentStyles.buttonText}>Welcome Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Review;
