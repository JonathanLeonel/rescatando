import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview } from "react-native-maps";
import { getDistance } from "geolib";

export default props => {
  const { setMascota } = props;

  const [region, setRegion] = useState({
    latitude: -34.71863,
    longitude: -58.370963,
    latitudeDelta: 0.0921 + 0.032,
    longitudeDelta: 0.0822 + 0.018
  });

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    setMascotas(
      props.navigation.getParam("mascotas", []).map(mascota => {
        // console.log([mascota.location.longitude, mascota.location.latitude], [props.position.coords.longitude, props.position.coords.latitude]);
        const distance = getDistance([mascota.location.longitude, mascota.location.latitude], [props.position.coords.longitude, props.position.coords.latitude], 500);
        return { ...mascota, distance: distance / 1000 + "km" };
      })
    );
  }, []);

  const onMascotaPress = mascotaPressed => {
    console.log("MapScreen::onMascotaPress()");
    // Si está abierto el tooltip
    setMascota(mascotaPressed);
    props.navigation.push("Buscado");
  };

  // const lostFocus = () => {
  //   console.log("MapScreen::lostFocus()");
  //   if (!algunaAbierta) {
  //     return;
  //   }
  //   // Si no está abierto el tooltip
  //   const nuevasMascotas = mascotas.map(mascota => {
  //     return { ...mascota, open: false };
  //   });

  //   setAlgunaAbierta(false);
  //   setMascotas(nuevasMascotas);
  // };

  return (
    <View style={styles.backgroundView}>
      {/* onRegionChangeComplete={setRegion} */}
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={region} moveOnMarkerPress={false}>
        {mascotas &&
          mascotas.map((mascota, idx) => (
            <Marker coordinate={mascota.location} title={mascota.nombre} description={mascota.distance} key={idx} onCalloutPress={() => onMascotaPress(mascota)} />
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
    height: 100,
    marginTop: 10,
    backgroundColor: "green"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

const marker = {
  latlng: { latitude: -34.71863, longitude: -58.370963 },
  title: "Bobby",
  description: "Ovejero alemán"
};
