import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default props => {
  const [region, setRegion] = useState({
    latitude: -34.71863,
    longitude: -58.370963,
    latitudeDelta: 0.0921 + 0.032,
    longitudeDelta: 0.0822 + 0.018
  });

  const pets = props.navigation.getParam("pets", []);

  return (
    <View style={styles.backgroundView}>
      {/* onRegionChangeComplete={setRegion} */}
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
        {pets && pets.map((pet, idx) => <Marker coordinate={pet.location} title={pet.name} description={pet.description} key={idx} />)}
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
