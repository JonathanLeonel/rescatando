/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { store, persistor } from "./source/store";
// import LoginComponent from "./source/components/LoginComponent";
import HomeScreen from "./source/screens/HomeScreen";
import LoginScreen from "./source/screens/LoginScreen";
import LoadingComponent from "./source/components/LoadingComponent";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LoadingComponent />}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerTitle: "Bienvenido a Rescatando!"
      })
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default App;
