import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default props => {
  const [name, setName] = useState("");

  return (
    <View style={styles.backgroundView}>
      <View style={styles.headingView}>
        <Text style={styles.headingTitle}>Encontre una mascota</Text>
        <View style={styles.imageContainer}>
          <View style={styles.image} />
        </View>
        <TextInput style={styles.textInput} type="flat" label="Nombre" value={name} onChangeText={setName} />
        <Button style={styles.button} mode="contained" onPress={() => console.info("Guardar")}>
          Guardar y publicar
        </Button>
      </View>
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
