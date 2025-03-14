import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import troottStyles from "../../assets/styles/troott";

function AuthRoot(authRootProps: any) {
  const { children, props = {} }: { children: ReactNode; props?: ViewStyle } =
    authRootProps;
  return <View style={[troottStyles.authContainer, props]}>{children}</View>;
}

export default AuthRoot;
