import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default props => {
  return (
    <View style={styles.backgroundView}>
      <Text>Encontrados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: "white"
  }
});
