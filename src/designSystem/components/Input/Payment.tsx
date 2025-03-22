import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import { Icon } from "@iconify/react";
import { palette } from "../../theme/palette";

interface DropdownProps {
  label?: string;
  options: { label: string; value: string }[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  placeholder?: string;
}

const DropdownInput: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [visible, setVisible] = useState(false);
  const scaleAnim = new Animated.Value(1);

  const toggleDropdown = () => {
    setVisible(!visible);
    Animated.spring(scaleAnim, { toValue: visible ? 1 : 1.05, useNativeDriver: true }).start();
  };

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
        <Text style={styles.selectedText}>
          {selectedValue ? options.find((o) => o.value === selectedValue)?.label : placeholder}
        </Text>
        <Icon icon="tabler:chevron-down" width={20} height={20} color={palette.grey500} />
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
          <Animated.View style={[styles.dropdownContainer, { transform: [{ scale: scaleAnim }] }]}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onSelect(item.value);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: palette.grey800,
    marginBottom: 5,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: palette.grey900,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
  },
  selectedText: {
    fontSize: 16,
    color: palette.white,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  dropdownContainer: {
    width: "80%",
    backgroundColor: palette.grey800,
    borderRadius: 10,
    paddingVertical: 10,
  },
  option: {
    padding: 12,
  },
  optionText: {
    fontSize: 16,
    color: palette.white,
  },
});

export default DropdownInput;
