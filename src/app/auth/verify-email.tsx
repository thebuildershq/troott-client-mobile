import React from "react";
import VerifyEmailForm from "@/components/forms/verify-email-otp";
import ScreenView from "@/components/ui/screenview";
import { SharedHeader } from "@/components/shared";
import Text from "@/components/ui/text";

const VerifyEmailSignup = () => {
  return (
    <ScreenView>
      <SharedHeader title="Verify Email Address" />
      <Text size="base" >
        To verify email, we’ve sent a One Time Password (OTP) to
        justinchris@gmail.com <Text color="#659DF6" weight="semibold">(Change)</Text>
      </Text>
      <VerifyEmailForm />
    </ScreenView>
  );
};

export default VerifyEmailSignup;
