import { IIcon } from "./interface.utl";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TIcon = IIcon;

export type TAuthStackList = {
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    ResetPassword: undefined;
    Verification: undefined;
    Email: undefined;
    Password: undefined;
    ChooseMinisters: undefined;
    GreatPicks: Array<any>;
  };

export type INavigation = NativeStackNavigationProp<TAuthStackList>;
  
export type TWelcomeScreen = {
    navigation: NativeStackNavigationProp<TAuthStackList, "Welcome">;
  };
  




