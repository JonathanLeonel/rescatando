import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button onPress={() => props.navigation.push("Home")} title="Log in" />
    </View>
  );
};