import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default props => {
  return (
    <View style={styles.backgroundView}>
      <Text>Encontrados</Text>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: "white"
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
