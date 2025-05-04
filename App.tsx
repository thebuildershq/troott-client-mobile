import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModalPortal } from "react-native-modals";
import Router from "./src/routes/Router";
import { BACKGROUND_COLOR, FLEX } from "./src/utils/constant.util";

import Error from "./src/screens/error";
import ErrorBoundary from "./src/utils/errorBoundary.util";

const errorHandler = (error: Error, stackTrace: string) => {
  console.log(error, "logged error");
  console.log(stackTrace, "logged error info");
};

export default function App() {
  return (
    <ErrorBoundary onError={errorHandler} FallbackComponent={Error}>
      <GestureHandlerRootView style={FLEX}>
        <SafeAreaView style={[FLEX, BACKGROUND_COLOR]}>
          <StatusBar style="light" />
          <Router />
          <ModalPortal />
        </SafeAreaView>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}
