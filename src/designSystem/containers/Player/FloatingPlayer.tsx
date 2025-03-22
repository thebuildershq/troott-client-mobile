import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Animated } from "react-native";
import FastImage from "react-native-fast-image";
import { Icon } from "@iconify/react";
import { addCollection } from "@iconify/react";
import lucideIcons from "@iconify/json/json/lucide.json";
import tablerIcons from "@iconify/json/json/tabler.json";
import TrackPlayer from "react-native-track-player";

// Load icons for offline use
addCollection(lucideIcons);
addCollection(tablerIcons);

interface IFloatingPlayer {
  sermonTitle: string;
  sermonImage: string;
}

const FloatingPlayer = (props: IFloatingPlayer) => {
  
  const { sermonTitle, sermonImage } = props

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const scaleAnim = new Animated.Value(1);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.1, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <View style={styles.container}>
      <FastImage 
      source={{ uri: sermonImage }} 
      style={styles.sermonImage} 
      resizeMode={FastImage.resizeMode.cover} 
      />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>{sermonTitle}</Text>
      </View>

      {/* Like Button */}
      <Pressable onPress={toggleLike} style={styles.iconButton}>
        <Icon 
        icon={isLiked ? "lucide:heart" : "tabler:heart"} 
        color={isLiked ? "#e74c3c" : "#fff"} 
        width={24} 
        height={24} 
        />
      </Pressable>

      {/* Play/Pause Button */}
      <TouchableOpacity onPress={togglePlay} style={styles.iconButton}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Icon 
          icon={isPlaying ? "tabler:pause" : "tabler:player-play"} 
          color="#fff" 
          width={28} 
          height={28} 
          />
        </Animated.View>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity style={styles.iconButton}>
        <Icon 
        icon="tabler:player-skip-forward" 
        color="#fff" 
        width={24} 
        height={24} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 10,
    elevation: 5,
  },
  sermonImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  iconButton: {
    marginHorizontal: 8,
    padding: 5,
  },
});

export default FloatingPlayer;
