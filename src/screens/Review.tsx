import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import customStyles from "../assets/styles/custom";
import { SafeAreaView } from "react-native-safe-area-context";
import componentStyles from "../assets/styles/components";
import { useNavigation } from "@react-navigation/native";
import { INavigation } from "../utils/type.util";
import { spacing } from "../designSystem/theme/spacing";
import { TextInput } from "../designSystem/components/Input/TextInput";
import { useForm } from "react-hook-form";
import { palette } from "../designSystem/theme/palette";
import OAuth from "../designSystem/layouts/OAuth";
import AuthHeader from "../designSystem/layouts/AuthHeader";

const Review = () => {
  const { control } = useForm();
  const navigation = useNavigation<INavigation>();

  return (
    <SafeAreaView style={customStyles.container}>
      <Text style={customStyles.text}>Review components and screens here</Text>
      <View style={customStyles.mt20}>


        <AuthHeader/>
        {/* <OAuth/> */}


        
        <View style={[componentStyles.input, { backgroundColor: palette.baseBlack }]}> 
        <TextInput
          backgroundColor="white"
          control={control}
          label="Label"
          name="name"
          containerStyle={componentStyles.input}
          placeholder="Enter your password"
          borderRadius={spacing.space10}
        />
        </View>
        <TextInput
          backgroundColor="white"
          control={control}
          label="Label"
          name="name"
          containerStyle={componentStyles.input}
          placeholder="Enter your password"
          borderRadius={spacing.space10}
        />

        {/* <View style={[componentStyles.input, { backgroundColor: palette.baseBlack }]}>
          <UserIcon size={24} color="#000" />
          <TextInput
          
          label=""
          name={''}
            placeholder="Username"
            textStyle={componentStyles.input}
            // style={[styles.input, { color: textColor }]}
          />
        </View> */}

        <TouchableOpacity
          style={componentStyles.button}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={componentStyles.buttonText}>Welcome Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={componentStyles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={componentStyles.buttonText}>Login Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Review;
