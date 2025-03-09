import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { BACKGROUND_COLOR, FLEX } from "../../utils/constant.util";


function MainAppRoot({ children, rootStyles }: { children: ReactNode; rootStyles?: ViewStyle }) {
  return <View style={[FLEX, BACKGROUND_COLOR, rootStyles]}>{children}</View>;
};

export default MainAppRoot;
