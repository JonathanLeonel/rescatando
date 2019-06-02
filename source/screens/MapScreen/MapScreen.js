import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default props => {
  const [region, setRegion] = useState({
    latitude: -34.71863,
    longitude: -58.370963,
    latitudeDelta: 0.016,
    longitudeDelta: 0.09
  });

  const { pets } = props;

  return (
    <View style={styles.backgroundView}>
      {/* onRegionChangeComplete={setRegion} */}
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
        {pets && <Marker coordinate={pet.location.latlng} title={pet.name} description={pet.description} />}
      </MapView>
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

const marker = {
  latlng: { latitude: -34.71863, longitude: -58.370963 },
  title: "Bobby",
  description: "Ovejero alemán"
};
