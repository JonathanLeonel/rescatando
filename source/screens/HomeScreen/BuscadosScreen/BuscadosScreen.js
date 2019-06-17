import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, RefreshControl, TouchableOpacity } from "react-native";
import { Button, FAB, withTheme, ActivityIndicator } from "react-native-paper";

const BuscadosScreen = props => {
  const { colors } = props.theme;

  // const [buscados, setBuscados] = useState([]);
  const { buscados, fetching, error, fetchBuscados, setMascota } = props;

  const [screenFocused, setScreenFocused] = useState(false);

  useEffect(() => {
    fetchBuscados && fetchBuscados();
    props.navigation.addListener("didBlur", () => {
      setScreenFocused(false);
    });
    props.navigation.addListener("didFocus", () => {
      setScreenFocused(true);
    });
  }, []);

  return (
    <View style={styles.backgroundView}>
      <ScrollView refreshControl={<RefreshControl refreshing={fetching} onRefresh={fetchBuscados} />}>
        <View style={styles.headingView}>
          <Text style={styles.headingTitle}>Buscados</Text>
          <Text style={styles.headingText}>Si viste a alguien y lo reconoces toca su foto para ponerte en contacto con su dueño.</Text>
          <Text style={styles.headingParagraph}>Si no está acá, empezá un encuentro cargando una foto y le avisamos a los que estén con una búsqueda activa.</Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={() => {
                props.navigation.push("Form");
              }}
            >
              Encontre una mascota
            </Button>
          </View>
        </View>
        {buscados && (
          <View style={styles.imagesContainer}>
            {buscados.map((buscado, idx) => (
              <TouchableOpacity
                style={styles.imageContainer}
                key={idx}
                onPress={() => {
                  setMascota(buscado);
                  props.navigation.push("Buscado");
                }}
              >
                <Image style={styles.image} source={buscado.foto} />
              </TouchableOpacity>
            ))}
          </View>
        )}
        {error && <Text style={styles.error}>{error}</Text>}
      </ScrollView>
      <FAB style={{ ...styles.fab, backgroundColor: colors.primary }} icon="map" onPress={() => props.navigation.push("Map", { mascotas: buscados })} />
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
    justifyContent: "flex-start"
    // alignContent: "flex-start"
    // alignSelf: "stretch"
  },
  imageContainer: {
    width: "33.3%",
    aspectRatio: 1,
    height: undefined
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    height: undefined
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  error: {
    fontSize: 16,
    padding: 8
  }
});
