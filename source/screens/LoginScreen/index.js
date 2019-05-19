import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
  const { push } = props.navigation;
  return (
    <View>
      <Text>Login Screen</Text>
      <Button onPress={() => push("Home")} title="Log in" />
    </View>
  );
};
