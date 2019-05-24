import React from "react";

import PropTypes from "prop-types";

import { Platform, StyleSheet, Text, View } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";
import firebase from "react-native-firebase";

const LoginComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{props.welcome}</Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => googleLogin(props.onLogin)}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
};

export default LoginComponent;

LoginComponent.propTypes = {
  welcome: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired
};

const googleLogin = async onLogin => {
  try {
    // Add any configuration settings here:
    await GoogleSignin.configure({
      webClientId: "567202936195-9jbbisishjg0v0vn5pdrdjd91mqoscql.apps.googleusercontent.com"
    });

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential);

    // console.info(JSON.stringify(currentUser.toJSON()));
    if (Platform.OS === "ios") {
      alert(currentUser.user._user.email);
    } else {
      alert(currentUser.user.displayName);
    }

    onLogin();
  } catch (e) {
    console.error(e);
  }
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
