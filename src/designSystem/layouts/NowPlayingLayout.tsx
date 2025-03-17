import { ReactNode } from "react";
import { View, Image, Text } from "react-native";

function NowPlayingLayout({ children, coverImage, songTitle }: { children: ReactNode; coverImage: string; songTitle: string }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
      <Image source={{ uri: coverImage }} style={{ width: 300, height: 300, borderRadius: 10 }} />
      <Text style={{ fontSize: 24, color: "white", marginTop: 20 }}>{songTitle}</Text>
      {children} {/* Playback controls */}
    </View>
  );
}

export default NowPlayingLayout;
