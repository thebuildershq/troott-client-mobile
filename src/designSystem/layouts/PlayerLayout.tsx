import { ReactNode } from "react";
import { View } from "react-native";
import BottomNavigation from "../../components/BottomNavigation";
import MiniPlayer from "../../components/MiniPlayer";

function PlayerLayout({ children }: { children: ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <MiniPlayer />  {/* Always visible */}
      <BottomNavigation />
    </View>
  );
}

export default PlayerLayout;
