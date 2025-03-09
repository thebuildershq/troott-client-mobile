import { IIcon } from "./interface.utl";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TIcon = IIcon;

export type TAuthStackList = {
    Welcome: undefined;
    Email: undefined;
    Password: undefined;
    Gender: undefined;
    BioData: undefined;
    ChooseMinisters: undefined;
    GreatPicks: Array<any>;
  };
  
export type TWelcomeScreen = {
    navigation: NativeStackNavigationProp<TAuthStackList, "Welcome">;
  };
  




