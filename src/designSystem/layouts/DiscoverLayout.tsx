import { ReactNode } from "react";
import { View, ScrollView } from "react-native";

function DiscoverLayout({ children }: { children: ReactNode }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
}

export default DiscoverLayout;
