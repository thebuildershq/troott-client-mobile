import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ISlider } from "../../../utils/components.types";
import { Text } from "./Text";
import { spacing } from "../../theme/spacing";


const Slider = (props: ISlider) => {

    const {
      title,
      data,
      renderItem,
      keyExtractor,
      rootStyles,
      imageContainerStyles,
    } = props 

    return (
      <View style={[styles.root, rootStyles]}>
        <Text
          color="white"
          fontFamily="matterBold"
          fontSize="space-24"
          styles={{ marginVertical: spacing["space-24"] }}
        >
          {title}
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.imageContainer, imageContainerStyles]}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      marginLeft: spacing["space-12"],
      marginVertical: spacing["space-20"],
    },
    imageContainer: {
      flexDirection: "row",
      gap: spacing["space-12"],
    },
  });
  
  export default Slider;
  