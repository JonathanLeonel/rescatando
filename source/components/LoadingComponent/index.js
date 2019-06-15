import React from "react";
import { StyleSheet, View, Text } from "react-native";

const LoadingComponent = () => (
  <View style={styles.container}>
    <Text>Loading</Text>
  </View>
);

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
