import React, { useEffect, useState } from "react";
import { View, Text, Platform, PermissionsAndroid, ActivityIndicator } from "react-native";
import { Button } from "react-native-paper";

export default props => {
  useEffect(() => {
    if (!props.position || Date.now() - props.position.timestamp > 60 * 60 * 1000) {
      (async () => {
        if (Platform.OS === "android") {
          const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        }
        props.getCurrentPosition();
      })();
    } else {
      if (props.navigation) {
        setTimeout(() => {
          props.navigation.navigate("App");
        }, 0);
      }
    }
  }, [props.position]);

  return (
    <View>
      {!props.error && (
        <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
          <Text>Estamos obteniendo tu ubicación</Text>
          <ActivityIndicator />
        </View>
      )}
      {props.error && (
        <View>
          {props.error.code === 1 && <Text>No pudimos obtener tu ubicación, por favor revisá los permisos de la app</Text>}
          {props.error.code === 2 && <Text>No pudimos obtener tu ubicación puede que hayas perdido la señal de GPS</Text>}
          {props.error.code === 3 && <Text>No pudimos obtener tu ubicación todavía</Text>}
          {props.error.code === 4 && <Text>No pudimos obtener tu ubicación por problemas de versión en el servicio</Text>}
          {props.error.code === 5 && <Text>No pudimos obtener tu ubicación revisá que tengas la ubicación activada</Text>}
          {props.error.code === -1 && <Text>No pudimos obtener tu ubicación, actualmente no está disponible</Text>}

          <Text>Para tener una mejor experiencia en la app es necesario que contemos con tu ubicación</Text>

          <Button mode="contained" onPress={() => props.getCurrentPosition()}>
            Intentar de nuevo
          </Button>
          <Button onPress={() => props.props.navigation.navigate("App")}>Continuar sin ubicación</Button>
        </View>
      )}
    </View>
  );
};
