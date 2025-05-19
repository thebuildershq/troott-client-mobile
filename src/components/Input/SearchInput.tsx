import React, { useState, useCallback } from "react";
import { View, TextInput, StyleSheet, Animated, TouchableOpacity, Pressable } from "react-native";
import { Icon } from "@iconify/react";
import { palette } from "../../designSystem/theme/palette";
import { ISearchInput } from "../../utils/interface.utl";


const SearchInput = (props: ISearchInput) => {

 const {
    value,
    placeholder = "Search...",
    onChangeText,
    onClear,
    backgroundColor = palette.white,
    borderRadius = 8,
    style,
  } = props

  const [focused, setFocused] = useState(false);
  const scaleAnim = new Animated.Value(1);

  // Handle focus animation
  const handleFocus = () => {
    setFocused(true);
    Animated.spring(scaleAnim, { toValue: 1.05, useNativeDriver: true }).start();
  };

  // Handle blur animation
  const handleBlur = () => {
    setFocused(false);
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };



  return (
    <Animated.View style={[styles.container, { backgroundColor, borderRadius }, { transform: [{ scale: scaleAnim }]},style]}>
      <Icon icon="tabler:search" width={20} height={20} color={palette.grey500} style={styles.icon} />
      
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={palette.grey400}
        onFocus={handleFocus}
        onChangeText={onChangeText}
        accessibilityLabel="Search input field"
        accessibilityHint="Enter search term"
      />

      {value.length > 0 && (
        <Pressable onPress={onClear} style={styles.clearButton}>
          <Icon icon="tabler:x" width={18} height={18} color={palette.grey500} />
        </Pressable>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: palette.grey300,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: palette.grey900,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  clearButton: {
    padding: 5,
  },
});

export default SearchInput;
