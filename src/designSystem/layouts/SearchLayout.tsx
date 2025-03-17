import { ReactNode } from "react";
import { View, TextInput, ScrollView } from "react-native";

function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Search for songs, artists, albums..."
        style={{ backgroundColor: "#222", padding: 10, borderRadius: 10, color: "#fff" }}
      />
      <ScrollView>{children}</ScrollView>
    </View>
  );
}

export default SearchLayout;
