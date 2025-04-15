import {
  activatePayload,
  changePasswordPayload,
  forgotPasswordPayload,
  loginPayload,
  logoutPayload,
  registerUserPayload,
  resendOtpPayload,
  resetPasswordPayload,
  verifyOtpPayload,
} from "../utils/payload.util";

class Auth {
  client;
  secondaryClient;

  constructor(client: any, secondaryClient?: any) {
    this.client = client;
    this.secondaryClient = secondaryClient;
  }

  register(payload: registerUserPayload) {
    return this.client.post("/auth/register", payload);
  }

  login(payload: loginPayload) {
    return this.client.post("/auth/login", payload);
  }

  verifyOTP(payload: verifyOtpPayload) {
    return this.client.post("/auth/verify-otp", payload);
  }

  resendOTP(payload: resendOtpPayload) {
    return this.client.post("/auth/resend-otp", payload);
  }

  activateUser(payload: activatePayload) {
    return this.client.post("/auth/activate", payload);
  }

  getToken(payload: any) {
    return this.client.post("/auth/token", payload);
  }

  changePassword(payload: changePasswordPayload) {
    return this.secondaryClient.post("/auth/change-password", payload);
  }

  logout(payload: logoutPayload) {
    return this.client.post("/auth/logout", payload);
  }

  forgotPassword(payload: forgotPasswordPayload) {
    return this.client.post("/auth/forgot-password", payload);
  }
  resetPassword(payload: resetPasswordPayload) {
    return this.secondaryClient.post("/auth/reset-password", payload);
  }
}

export default Auth;
