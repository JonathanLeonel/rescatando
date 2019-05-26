import AuthLoadingScreen from "./AuthLoadingScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import UploadFormScreen from "./UploadFormScreen";
import ChatScreen from "./ChatScreen";

import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen, //LoginComponent, //LoginScreen,
    navigationOptions: () => ({
      headerTitle: "Bienvenido a Rescatando!"
    })
  }
});

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    },
    Map: {
      screen: MapScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    },
    UploadForm: {
      screen: UploadFormScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: () => ({
        headerTitle: "Rescatando!"
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
