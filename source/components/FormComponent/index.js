import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
// import { TextInput, Button, ActivityIndicator, Snackbar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
// import ImagePicker from "react-native-image-picker";
import FormTextInput from "../FormTextInput";

export default props => {
  const { mascota = {} } = props;

  const { foto = "", nombre = "", raza = "", pelaje = "", collar = "", otrosDetalles = "" } = mascota;

  console.log(nombre);

  return (
    <View style={styles.backgroundView}>
      <ScrollView>
        <View style={styles.headingView}>
          <Text style={styles.headingTitle}>Encontre una mascota</Text>
          <TouchableOpacity onPress={() => console.log("Click en foto")} style={styles.imageContainer}>
            {foto && (
              <Image
                style={{
                  width: 51,
                  height: 51,
                  resizeMode: "contain"
                }}
                style={styles.image}
                source={foto}
              />
            )}
          </TouchableOpacity>
          <FormTextInput style={styles.textInput} type="flat" label="Nombre" value={nombre} />
          <FormTextInput style={styles.textInput} type="flat" label="Raza" value={raza} />
          <FormTextInput style={styles.textInput} type="flat" label="Pelaje" value={pelaje} />
          <FormTextInput style={styles.textInput} type="flat" label="Collar" value={collar} />
          <FormTextInput style={styles.textInput} type="flat" multiline={true} numberOfLines={5} label="Otros Detalles" value={otrosDetalles} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
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
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    marginTop: 16
  },
  button: {
    marginTop: 16,
    alignSelf: "center"
  }
});
