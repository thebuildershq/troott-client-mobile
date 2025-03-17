import { ReactNode } from "react";
import { View, ScrollView } from "react-native";

function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {children}
    </ScrollView>
  );
}

export default ProfileLayout;
