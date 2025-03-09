import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { spacing } from "../theme/spacing";


function AuthRoot({ children, props }: { children: ReactNode; props?: ViewStyle }) {
  return <View style={[styles.container, props]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.space16,
  },
});

export default AuthRoot;
