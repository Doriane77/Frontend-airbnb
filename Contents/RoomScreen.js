import axios from "axios";
import { URL_APP_API } from "@env";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import StatusLoading from "../Components/StatusLoading";

function HomeScreen({ route }) {
  const roomId = route.params.id;
  const [room, setRoom] = useState([]);

  async function reqRoom() {
    try {
      const response = await axios.get(`${URL_APP_API}room/${roomId}`);
      setRoom(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    reqRoom();
  }, []);
  console.log(room);
  return (
    <View>
      <Text>{room.title}</Text>
    </View>
  );
}

export default HomeScreen;
