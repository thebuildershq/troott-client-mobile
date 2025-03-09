import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import AuthRoot from '../../designSystem/layouts/AuthRoot'
import SecondaryButton from '../../designSystem/components/Buttons/SecondaryButton'
import { Text } from '../../designSystem/components/Input/Text'


const WelcomeScreen = (props: IWelcomeScreen) => {

    const {navigation}= props

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
        getValues,
        setError,
        reset,
      } = useForm({
        defaultValues: { email: "" },
        mode: "onSubmit",
      });

      const EMAIL_VALUE = watch("email");
    
      const onSubmit = () => {
        navigation.navigate("Email");
      };
  
    return (
    <AuthRoot>
      <View style={styles.container}>
        <Text color="white" fontFamily="MatterBold" fontSize="space-32">
          Welcome
        </Text>
      </View>
      <SecondaryButton
        title="Next"
        onPress={handleSubmit(onSubmit)}
        loading={false}
        disabled={false}
      />
    </AuthRoot>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
      },
})