import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from "react-native";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    // if (props.currentUser) {
    props.navigation.navigate(props.currentUser ? "Home" : "Login");
    // }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
