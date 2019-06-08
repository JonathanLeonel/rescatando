import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "react-native-image-picker";
import FormTextInput from "../../components/FormTextInput";

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

  const [obtainingFoto, setObtainingFoto] = useState(false);
  const [foto, setFoto] = useState(undefined);
  const [nombre, setNombre] = useState(form.nombre || "");
  const [raza, setRaza] = useState(form.raza || "");
  const [pelaje, setPelaje] = useState(form.pelaje || "");
  const [collar, setCollar] = useState(form.collar || "");
  const [otrosDetalles, setOtrosDetalles] = useState(form.otrosDetalles || "");

  useEffect(() => {
    // TODO: decide to destroy itself on success upload, or show error if needed
    if (props.busqueda && !props.error) {
      // successful upload
      props.limpiarBusqueda();
      props.navigation && props.navigation.goBack();
    }

    return;
  }, [props.busqueda, props.error]);

  return (
    <View style={styles.backgroundView}>
      <ScrollView>
        <View style={styles.headingView}>
          <Text style={styles.headingTitle}>Encontre una mascota</Text>
          <TouchableOpacity onPress={() => showImagePicker(setFoto, setObtainingFoto)} style={styles.imageContainer}>
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
            {!foto && (
              <View style={styles.image}>
                {obtainingFoto && <ActivityIndicator />}
                {!obtainingFoto && <Text>Tocá acá para cargar una imagen</Text>}
              </View>
            )}
          </TouchableOpacity>
          <FormTextInput
            style={styles.textInput}
            type="flat"
            label="Nombre"
            value={nombre}
            onChangeText={setNombre}
            error={validarInput(nombre)}
            errorText="Por favor ingresá un nombre válido"
          />
          <FormTextInput style={styles.textInput} type="flat" label="Raza" value={raza} onChangeText={setRaza} />
          <FormTextInput
            style={styles.textInput}
            type="flat"
            label="Pelaje"
            value={pelaje}
            onChangeText={setPelaje}
            error={validarInput(pelaje)}
            errorText="Por favor ingresá un pelaje válido"
          />
          <FormTextInput
            style={styles.textInput}
            type="flat"
            label="Collar"
            value={collar}
            onChangeText={setCollar}
            error={validarInput(collar)}
            errorText="Por favor ingresá un collar válido"
          />
          <FormTextInput
            style={styles.textInput}
            type="flat"
            multiline={true}
            numberOfLines={5}
            label="Otros Detalles"
            value={otrosDetalles}
            onChangeText={setOtrosDetalles}
            error={validarInput(otrosDetalles)}
          />
          {props.uploading ? (
            <ActivityIndicator />
          ) : (
            <Button
              disabled={props.uploading}
              style={styles.button}
              mode="contained"
              onPress={() => validateAndUpload({ foto, nombre, raza, pelaje, collar, otrosDetalles }, props.uploadBusqueda)}
            >
              Guardar y publicar
            </Button>
          )}
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

const showImagePicker = (setImage, setObtainingFoto) => {
  const options = {
    title: "Elegí la foto",
    storageOptions: {
      skipBackup: true,
      path: "images"
    }
  };

  setObtainingFoto(true);

  ImagePicker.showImagePicker(options, response => {
    setObtainingFoto(false);
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("ImagePicker Error: ", response.error);
    } else if (response.customButton) {
      console.log("User tapped custom button: ", response.customButton);
    } else {
      // const source = { uri: response.uri };

      // You can also display the image using data:
      const source = { uri: "data:image/jpeg;base64," + response.data };

      setImage(source);
    }
  });
};

// returns true on error
const validarInput = text => {
  console.log("Validando", text);

  if (!text) {
    return true;
  }

  if (text.length > 8) {
    console.log("Es mayor a 8", text);
    return true;
  }

  return false;
};

const validateAndUpload = (values, uploadFunction) => {
  const { foto, nombre, raza, pelaje, collar, otrosDetalles } = values;

  if (validarInput(nombre)) {
    return;
  }
  if (validarInput(pelaje)) {
    return;
  }
  if (validarInput(collar)) {
    return;
  }
  if (validarInput(otrosDetalles)) {
    return;
  }

  uploadFunction(values);
};
