import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button, FAB, withTheme } from "react-native-paper";

const BuscadosScreen = props => {
  const { colors } = props.theme;
  return (
    <View style={styles.backgroundView}>
      <ScrollView>
        <View style={styles.headingView}>
          <Text style={styles.headingTitle}>Buscados</Text>
          <Text style={styles.headingText}>Si viste a alguien y lo reconoces toca su foto para ponerte en contacto con su dueño.</Text>
          <Text style={styles.headingParagraph}>Si no está acá, empezá un encuentro cargando una foto y le avisamos a los que estén con una búsqueda activa.</Text>
          <View style={styles.buttonContainer}>
            <Button mode="contained">Empezar encuentro</Button>
          </View>
        </View>
        <View style={styles.imagesContainer}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
            <Image style={{ width: "33.3%", aspectRatio: 1, height: undefined }} source={images[getRandomInt(0, 9)]} key={el} /> //<ImageComponent key={el} imgNumber={getRandomInt(0, 9)} />
          ))}
        </View>
      </ScrollView>
      <FAB style={{ ...styles.fab, backgroundColor: colors.primary }} icon="map" onPress={() => props.navigation.push("Map")} />
    </View>
  );
};

export default withTheme(BuscadosScreen);

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
  buttonContainer: {
    marginTop: 8,
    alignItems: "flex-end"
  },
  imagesContainer: {
    flexDirection: "row",
    // overflow: "scroll",
    flexWrap: "wrap",
    // alignItems: "center",
    justifyContent: "space-between"
    // alignContent: "flex-start"
    // alignSelf: "stretch"
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const images = [
  require("./img/perro1.png"),
  require("./img/perro2.png"),
  require("./img/perro3.png"),
  require("./img/perro4.png"),
  require("./img/perro5.png"),
  require("./img/perro6.png"),
  require("./img/perro7.png"),
  require("./img/perro8.png"),
  require("./img/perro9.png"),
  require("./img/perro10.png")
];
