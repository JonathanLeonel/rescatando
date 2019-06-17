import React from "react";
import { View, Text } from "react-native";
import FormComponent from "../../components/FormComponent";

export default props => {
  return (
    <View>
      <FormComponent mascota={props.mascota} />
    </View>
  );
};
