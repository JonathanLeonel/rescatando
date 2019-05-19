import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => props.navigation.push("Map")} title="Ir al mapa" />
      <Button onPress={() => props.navigation.push("Chat")} title="Ir al chat" />
      <Button onPress={() => props.navigation.push("UploadForm")} title="Ir al formulario" />
    </View>
  );
};
