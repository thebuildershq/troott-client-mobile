import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { OTPSchema, OTPType } from '@/validation/otp'
import { zodResolver } from '@hookform/resolvers/zod'
import OTPFormInput from '../ui/otp-forminput'
import Button from '../ui/button'
import TermsAndConditions from '@/designSystem/containers/Auth/TermsConditions'
import Text from '../ui/text'
import { theme } from '@/constants/theme'

const VerifyEmailForm = () => {
    const form = useForm<OTPType>({
        defaultValues:{
            otp: "",
        },
        resolver: zodResolver(OTPSchema),
    })
  return (
    <View style={styles.container}>
      <OTPFormInput
      name='otp'
      control={form.control}
      />
       <TermsAndConditions/>
      <Button label='Continue' disabled={!form.formState.isValid}/>
    <Text color={theme.colors.grey[500]}>This code will expire in 5 minutes. </Text>
    <Text weight='semibold' color={theme.colors.green[500]} size='base'>Resend Code</Text>
    </View>
  )
}

export default VerifyEmailForm

const styles = StyleSheet.create({
    container:{
        gap:20
    }
})