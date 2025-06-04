import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { TrackCardProps } from "./types";
import Text from "../ui/text";
import { theme } from "@/constants/theme";
import { SolidIcons } from "@/assets/icons";
import { router } from "expo-router";

const TrackCard = ({
  title,
  variant = "small",
  preacher,
  duration,
  image,
  cardStyle
}: TrackCardProps) => {
  function handlePress (){
    router.push('/track/track-12345')
  }
  if (variant === "large") {
    return (
      <TouchableOpacity activeOpacity={.7} style={[styles.largeContainer,cardStyle]} onPress={handlePress}> 
        <Image
          style={styles.imageLarge}
          source={image as ImageSourcePropType}
        />
        <View style={{ gap: theme.sizes.spacing.sm }}>
          <Text size="base" color="#fff">
            {title}
          </Text>
          <View style={styles.textContainer}>
            <Text textStyle={{ alignItems: "center" }}>{preacher}</Text>
            <View style={styles.dot} />
            <Text>{duration}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity activeOpacity={.7} style={[styles.container,cardStyle]} onPress={handlePress}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.imageSmall}
          source={image as ImageSourcePropType}
        />
        <View style={{ gap: theme.sizes.spacing.sm }}>
          <Text size="base" color="#fff">
            {title}
          </Text>
          <View style={styles.textContainer}>
            <Text textStyle={{ alignItems: "center" }}>{preacher}</Text>
            <View style={styles.dot} />
            <Text>{duration}</Text>
          </View>
        </View>
      </View>
      <SolidIcons.EllipsisVerticalIcon color={theme.colors.grey[50]} />
    </TouchableOpacity>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: theme.sizes.spacing.base,
    borderBottomWidth: 1,
    borderColor: theme.colors.grey[600],
    width: theme.sizes.screen.width * 0.8,
  },
  imageSmall: {
    height: 64,
    width: 64,
    borderRadius: theme.sizes.radius.sm,
  },
  titleContainer: {
    flexDirection: "row",
    gap: theme.sizes.spacing.md,
    alignItems: "center",
  },
  dot: {
    height: 4,
    width: 4,
    backgroundColor: theme.colors.grey[300],
    borderRadius: theme.sizes.radius.full,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.sizes.spacing.sm,
  },
  imageLarge:{
    width:'100%',
    height:theme.sizes.screen.height * .2,
    borderRadius:theme.sizes.radius.base
  },
  largeContainer:{
    gap:theme.sizes.spacing.base,
  }
});
