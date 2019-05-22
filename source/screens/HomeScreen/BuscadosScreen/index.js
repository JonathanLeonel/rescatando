import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

// import ImageComponent from "../../../components/ImageComponent";

export default props => {
  return (
    <View style={styles.backgroundView}>
      <View style={styles.headingView}>
        <Text style={styles.headingTitle}>Buscados</Text>
        <Text style={styles.headingText}>Si viste a alguien y lo reconoces toca su foto para ponerte en contacto con su dueño.</Text>
        <Text style={styles.headingParagraph}>Si no está acá, empezá un encuentro cargando una foto y le avisamos a los que estén con una búsqueda activa.</Text>
        <View style={styles.buttonContainer}>
          <Button mode="contained">Empezar encuentro</Button>
        </View>
      </View>
      {/* <ImageComponent source="/source/images/Intersección 1.png" /> */}
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
  buttonContainer: {
    marginTop: 8,
    alignItems: "flex-end"
  }
});
