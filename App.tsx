import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModalPortal } from 'react-native-modals';
import Router from "./src/routes/Router";
import { BACKGROUND_COLOR, FLEX } from "./src/utils/constant.util";


export default function App() {
  return (
    <GestureHandlerRootView style={FLEX}>
      <SafeAreaView style={[FLEX, BACKGROUND_COLOR]}>
        <StatusBar style="light" />
        <Router />
        <ModalPortal />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
