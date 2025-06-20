import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../ui/text";
import { SolidIcons } from "@/assets/icons";
import { theme } from "@/constants/theme";

interface PlayListCardItemProps {
  image?: string;
  title?: string;
  description?: string;
  onPress?: () => void;
  id: string;
}

const PlayListCard = ({
  image,
  title,
  description,
  onPress,
  id,
}: PlayListCardItemProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image || "https://picsum.photos/200/300" }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text size="base" color="#fff" weight="medium">{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>
          <Pressable>
          <SolidIcons.EllipsisVerticalIcon color={'#fff'} />
        </Pressable>
    </Pressable>
  );
};

export default PlayListCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey[600],
    paddingBottom: 10,
  },
  image: {
    width: theme.sizes.screen.width * 0.15,
    height: theme.sizes.screen.width * 0.15,
    borderRadius: theme.sizes.radius.sm,
    marginRight: 10,
  },
  textContainer: {
    gap:theme.sizes.spacing.sm
  },
  imageContainer: {
   flexDirection: "row",
   alignItems: "center",
   gap: theme.sizes.spacing.sm,
  }
});
