import React, { useState } from "react";

import PropTypes from "prop-types";

import { Platform, StyleSheet, Text, View } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";
import firebase from "react-native-firebase";

import FadeInView from "../FadeInView";

// const LoginComponent = props => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>{props.welcome}</Text>
//       <GoogleSigninButton
//         style={{ width: 192, height: 48 }}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={() => googleLogin(props.onLogin)}
//         // disabled={this.state.isSigninInProgress}
//       />
//     </View>
//   );
// };

import { Card, Title, Paragraph, ActivityIndicator } from "react-native-paper";

const LoginComponent = props => {
  const [signinInProgress, setSignInInProgress] = useState(false);

  return (
    <FadeInView>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Bienvenido a Rescatando!</Title>
          <Paragraph>Iniciá sesión para empezar</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          {!signinInProgress ? (
            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={() => googleLogin(props.onLogin, setSignInInProgress)}
              // disabled={signinInProgress}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </Card.Actions>
      </Card>
    </FadeInView>
  );
};

export default LoginComponent;

LoginComponent.propTypes = {
  welcome: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired
};

const googleLogin = async (onLogin, setSignInInProgress) => {
  try {
    // Add any configuration settings here:

    setSignInInProgress(true);

    await GoogleSignin.configure({
      webClientId: "567202936195-9jbbisishjg0v0vn5pdrdjd91mqoscql.apps.googleusercontent.com"
    });

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    // login with credential
    const currentUser = await firebase.auth().signInWithCredential(credential);

    // if (Platform.OS === "ios") {
    //   alert(currentUser.user._user.email);
    // } else {
    //   alert(currentUser.user.displayName);
    // }

    setSignInInProgress(false);
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
  },
  card: {
    borderRadius: 5,
    marginHorizontal: 40,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  cardActions: {
    marginTop: 20,
    justifyContent: "center"
  }
});
