import React from "react";

import PropTypes from "prop-types";

import { StyleSheet, Text, View, Button } from "react-native";

const LoginComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{props.welcome}</Text>
      <Button title="Log in" onPress={() => props.onLogin()} />
    </View>
  );
};

export default LoginComponent;

LoginComponent.propTypes = {
  welcome: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
