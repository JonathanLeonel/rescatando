import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview } from "react-native-maps";

export default props => {
  const { setMascota } = props;

  const [region, setRegion] = useState({
    latitude: -34.71863,
    longitude: -58.370963,
    latitudeDelta: 0.0921 + 0.032,
    longitudeDelta: 0.0822 + 0.018
  });

  const mascotas = props.navigation.getParam("mascotas", []);

  return (
    <View style={styles.backgroundView}>
      {/* onRegionChangeComplete={setRegion} */}
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
        {mascotas &&
          mascotas.map((mascota, idx) => (
            <Marker coordinate={mascota.location} title={mascota.nombre} description={mascota.description} key={idx}>
              <Callout
                tooltip={false}
                onPress={() => {
                  setMascota(mascota);
                  props.navigation.push("Buscado");
                }}
              >
                <Text>{mascota.nombre}</Text>
                <TouchableOpacity style={styles.imageContainer}>
                  <Image style={styles.image} source={mascota.foto} />
                </TouchableOpacity>
              </Callout>
            </Marker>
          ))}
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
  },
  imageContainer: {
    width: 100,
    aspectRatio: 1,
    height: undefined,
    marginTop: 10
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    height: undefined
  }
});

const marker = {
  latlng: { latitude: -34.71863, longitude: -58.370963 },
  title: "Bobby",
  description: "Ovejero alemán"
};
