import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import LoginComponent from "../../components/LoginComponent";

export default props => {
  return (
    <ImageBackground source={require("./img/loginBackground.jpg")} style={styles.container}>
      <LoginComponent style={styles.loginCard} onLogin={() => props.navigation.push("Home")} />
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
