import { StyleSheet, View } from "react-native";
import React from "react";
import FormInput from "../ui/forminput";
import { useForm } from "react-hook-form";
import { SignupSchema, SignupSchemaType } from "@/validation/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import {  Lock, Sms, User } from "iconsax-react-nativejs";
import { theme } from "@/constants/theme";
import Button from "../ui/button";
import { router } from "expo-router";

const SignUpform = () => {
  const form = useForm<SignupSchemaType>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignupSchema),
  });
  function handleSubmit(data:SignupSchemaType){
    console.log(data)
    router.push("/auth/verify-email")
  }
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <FormInput
          name="first_name"
          control={form.control}
          label="First Name"
          leftIcon={<User color={theme.colors.grey[400]} size={20} />}
          containerStyle={{ width: theme.sizes.screen.width*.45 }}
        />
        <FormInput
          name="last_name"
          control={form.control}
          label="Last Name"
          leftIcon={<User color={theme.colors.grey[400]} size={20} />}
          containerStyle={{ width: theme.sizes.screen.width*.45 }}
        />
      </View>
      <FormInput
        name="email"
        control={form.control}
        label="Email"
        leftIcon={<Sms color={theme.colors.grey[400]} size={20} />}
      />
      <FormInput
        name="password"
        control={form.control}
        label="Password"
        placeholder="*********"
        leftIcon={<Lock color={theme.colors.grey[400]} size={20} />}
      />
      <Button onPress={form.handleSubmit(handleSubmit)} disabled={!form.formState.isValid} label="Continue"></Button>
    </View>
  );
};

export default SignUpform;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  nameContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
