import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import LoginComponent from "./LoginComponent";

export default props => {
  if (props.currentUser) {
    return null;
  }

  return (
    <ImageBackground source={require("./img/loginBackground.jpg")} style={styles.container}>
      <LoginComponent style={styles.loginCard} onLogin={() => props.navigation.navigate("App")} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  loginCard: {
    paddingHorizontal: 40
  }
});
