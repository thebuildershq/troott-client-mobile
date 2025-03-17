import { ReactNode } from "react";
import { View, ScrollView, ImageBackground } from "react-native";

function PlaylistLayout({ children, coverImage }: { children: ReactNode; coverImage: string }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ uri: coverImage }} style={{ height: 300, justifyContent: "center" }} />
      <ScrollView style={{ flex: 1, padding: 20 }}>
        {children}
      </ScrollView>
    </View>
  );
}

export default PlaylistLayout;
