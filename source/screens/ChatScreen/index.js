import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { ActivityIndicator } from "react-native-paper";

export default props => {
  const [messages, setMessages] = useState(null); //useState([
  // {
  //   _id: 1,
  //   text: "Hello developer",
  //   createdAt: new Date(),
  //   user: {
  //     _id: 2,
  //     name: "React Native",
  //     avatar: "https://placeimg.com/140/140/any"
  //   }
  // }
  // ]);

  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]);
    }, 5000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {messages ? (
        <GiftedChat
          messages={messages}
          onSend={newMessages => setMessages(GiftedChat.append(messages, newMessages))}
          user={{
            _id: 1
          }}
        />
      ) : (
        <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
          <Text>Estamos cargando tus mensajes</Text>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};
