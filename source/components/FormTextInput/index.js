import React from "react";
import { View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

export default props => {
  const { type, label, value, onChangeText, multiline = false, numberOfLines = 1, error, errorText, style } = props;

  return (
    <View style={style}>
      <TextInput type={type} label={label} value={value} onChangeText={onChangeText} multiline={multiline} numberOfLines={numberOfLines} error={error} />
      <HelperText type="error" visible={error}>
        {errorText}
      </HelperText>
    </View>
  );
};
