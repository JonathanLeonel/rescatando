import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
  return (
    <View>
      <Text>Map Screen</Text>
      <Button onPress={() => props.navigation.push("Chat")} title="Ir al chat" />
    </View>
  );
};
