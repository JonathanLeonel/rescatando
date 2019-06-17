import AuthLoadingScreen from "./AuthLoadingScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import BuscadoFormScreen from "./BuscadoFormScreen";
import ChatScreen from "./ChatScreen";
import LocationScreen from "./LocationScreen";
import DetalleScreen from "./DetalleScreen";

import { createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";

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
    Buscado: createMaterialTopTabNavigator(
      {
        Detalle: DetalleScreen,
        Chat: ChatScreen
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let tabName;
            if (routeName === "Detalle") {
              tabName = "Detalle";
            } else if (routeName === "Chat") {
              tabName = "Chat";
            }
            // You can return any component that you like here!
            return <Text>{tabName}</Text>; //<IconComponent name={iconName} size={25} />;
          }
        }),
        tabBarOptions: {
          indicatorStyle: { backgroundColor: "white" },
          style: { backgroundColor: "#009688", color: "rgba(255, 255, 255, 0.6)" }
        }
      }
    )
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
