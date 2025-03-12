import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import CustomImage from "../../designSystem/components/Images/Images";
import customStyles from "../../assets/styles/custom";
import { IMAGES } from "../../assets/images/images";
import { useNavigation } from "@react-navigation/native";
import { INavigation } from "../../utils/type.util";

const SplashScreen = () => {
  const navigation = useNavigation<INavigation>();

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.ease });
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });

    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    "worklet";

    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <SafeAreaView style={customStyles.container}>
      <Animated.View style={animatedStyle}>
        <CustomImage source={IMAGES.png} style={customStyles.logo} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
