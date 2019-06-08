import AuthLoadingScreen from "./AuthLoadingScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import BuscadoFormScreen from "./BuscadoFormScreen";
import ChatScreen from "./ChatScreen";
import LocationScreen from "./LocationScreen";

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
    BuscadoForm: {
      screen: BuscadoFormScreen,
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

const LocationStack = createStackNavigator(
  {
    Location: {
      screen: LocationScreen
    }
  },
  {
    initialRouteName: "Location"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Location: LocationStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
