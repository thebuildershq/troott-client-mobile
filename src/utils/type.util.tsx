import { IIcon } from "./interface.utl";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TIcon = IIcon;

export type TAuthStackList = {
    Welcome: undefined;
    Review: undefined;
    Login: undefined;
    Email: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    ForgotPasswordEmail: undefined
    ForgotPasswordCode: undefined
    ResetPassword: undefined;
    NewPassword: undefined
    Verification: undefined;
    Password: undefined;
    ChooseMinisters: undefined;
    GreatPicks: Array<any>;
    Home: undefined
    Explore: undefined
  };

export type INavigation = NativeStackNavigationProp<TAuthStackList>;
  
export type TWelcomeScreen = {
    navigation: NativeStackNavigationProp<TAuthStackList, "Welcome">;
  };
  




