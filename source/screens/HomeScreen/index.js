// export default props => {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <Button onPress={() => props.navigation.push("Map")} title="Ir al mapa" />
//       <Button onPress={() => props.navigation.push("Chat")} title="Ir al chat" />
//       <Button onPress={() => props.navigation.push("UploadForm")} title="Ir al formulario" />
//     </View>
//   );
// };
import BuscadosScreen from "./BuscadosScreen";
import EncontradosScreen from "./EncontradosScreen";

import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [{ key: "buscados", title: "Buscados", icon: "queue-music" }, { key: "encontrados", title: "Encontrados", icon: "album" }]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    buscados: BuscadosScreen,
    encontrados: EncontradosScreen
  });

  render() {
    return <BottomNavigation navigationState={this.state} onIndexChange={this._handleIndexChange} renderScene={this._renderScene} />;
  }
}

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: "white"
  }
});
