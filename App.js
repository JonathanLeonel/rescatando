/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./source/store";
import LoginComponent from "./source/components/LoginComponent";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginComponent />
      </Provider>
    );
  }
}

export default App;
