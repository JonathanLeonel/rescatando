import React from "react";
import { View, Text } from "react-native";
import { Button, List } from "react-native-paper";

// props.onLogout();

export default props => {
  return (
    <View>
      <List.Section>
        <List.Subheader>General</List.Subheader>
        <List.Item onPress={() => props.onLogout()} title="Cerrar sesión" left={() => <List.Icon icon="exit-to-app" />} />
      </List.Section>
    </View>
  );
};
