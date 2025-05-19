import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#727272',
    borderBottomWidth: 1,
    marginVertical: 20,
    width: '100%',
  },
});

export default HorizontalLine;
