import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

// ID: String,
// UserID: String,
// Nombre: String,
// Fecha: Date,
// GeoLocation: {
//   Latitude: Int,
//   Longitude: Int
// },
// Raza: String,
// Edad: Int [Cachorro, joven, adulto],
// Pelaje: String,
// Collar: String,
// Actitud: Int [Calmado, Asustado, Agresivo],
// Situación: Int [LugarSeguro, Calle],
// OtrosDetalles: String

export default props => {
  const form = props.form || {};

  const [nombre, setNombre] = useState(form.nombre || "");
  const [raza, setRaza] = useState(form.raza || "");
  const [pelaje, setPelaje] = useState(form.pelaje || "");
  const [collar, setCollar] = useState(form.collar || "");
  const [otrosDetalles, setOtrosDetalles] = useState(form.otrosDetalles || "");

  return (
    <View style={styles.backgroundView}>
      <ScrollView>
        <View style={styles.headingView}>
          <Text style={styles.headingTitle}>Encontre una mascota</Text>
          <View style={styles.imageContainer}>
            <View style={styles.image} />
          </View>
          <TextInput style={styles.textInput} type="flat" label="Nombre" value={nombre} onChangeText={setNombre} />
          <TextInput style={styles.textInput} type="flat" label="Raza" value={raza} onChangeText={setRaza} />
          <TextInput style={styles.textInput} type="flat" label="Pelaje" value={pelaje} onChangeText={setPelaje} />
          <TextInput style={styles.textInput} type="flat" label="Collar" value={collar} onChangeText={setCollar} />
          <TextInput style={styles.textInput} type="flat" multiline={true} numberOfLines={5} label="Otros Detalles" value={otrosDetalles} onChangeText={setOtrosDetalles} />
          <Button style={styles.button} mode="contained" onPress={() => console.info("Guardar")}>
            Guardar y publicar
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: "white"
  },
  headingView: {
    padding: 16
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: "700"
  },
  headingText: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: "500"
  },
  headingParagraph: {
    marginTop: 8,
    fontWeight: "200"
  },
  imageContainer: {
    marginTop: 16,
    justifyContent: "flex-start",
    // alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row"
    // backgroundColor: "red"
    // width: "100%",
    // height: 80
  },
  image: {
    width: "80%",
    aspectRatio: 16 / 9,
    height: undefined,
    backgroundColor: "gray"
  },
  textInput: {
    marginTop: 16
  },
  button: {
    marginTop: 16,
    alignSelf: "center"
  }
});
