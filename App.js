/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./source/store";
import AppContainer from "./source/screens";
// import LoginComponent from "./source/components/LoginComponent";
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

export default App;
