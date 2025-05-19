import {
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "../Icons/Icons";
import { Text } from "./Text";
import { imageHeight, imageWidth } from "../../utils/constant.util";

const MinisterImage = (props: any) => {
  const {
    id,
    imageUrl,
    minister,
    selected,
    onSelect,
    width = imageWidth,
    height = imageHeight,
    border,
    imageStyles,
    textStyle,
  }: {
    imageUrl: ImageProps["source"];
    minister?: string;
    id: string;
    selected?: Array<string>;
    onSelect?: (id: any) => void;
    width?: string | number;
    height?: string | number;
    border?: number;
    imageStyles?: ImageStyle;
    textStyle?: TextStyle;
  } = props;

  const borderRadius = border !== undefined ? border : Number(width) / 2;

  return (
    <TouchableOpacity style={styles.root} onPress={onSelect}>
      {selected?.includes(id) && (
        <View style={styles.selectedMinister}>
          <Icon name="checked" />
        </View>
      )}
      <Image
        source={imageUrl}
        height={height as any}
        width={width as any}
        borderRadius={borderRadius}
        style={[imageStyles]}
      />
      <Text
        color="white"
        fontFamily="josefinSansBold"
        fontSize="space-12"
        styles={{ alignSelf: "center", ...textStyle }}
      >
        {minister}
      </Text>
    </TouchableOpacity>
  );
};

export default MinisterImage;

const styles = StyleSheet.create({
  root: {
    position: "relative",
    alignItems: "center",
  },
  selectedMinister: {
    position: "absolute",
    zIndex: 20,
    right: 1,
  },
});
