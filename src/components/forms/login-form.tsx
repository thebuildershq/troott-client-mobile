import { StyleSheet, View } from "react-native";
import React from "react";
import FormInput from "../ui/forminput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  Lock, Sms } from "iconsax-react-nativejs";
import { theme } from "@/constants/theme";
import Button from "../ui/button";
import { LoginSchemaType,LoginSchema } from "@/validation/login";

const LoginForm = () => {
  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  function handleSubmit(data:LoginSchemaType){
    console.log(data)
  }
 return (
    <View style={styles.container}>

      <FormInput
        name="email"
        control={form.control}
        label="Email"
        placeholder="john.alabi@mail.com"
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

export default LoginForm;

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
