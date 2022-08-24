import axios from "axios";
import { URL_APP_API } from "@env";
import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";
import home from "../Styles/home";
import roomCSS from "../Styles/roomCSS";

import StatusLoading from "../Components/StatusLoading";

function HomeScreen({ route, theme }) {
  const roomId = route.params.id;

  const [room, setRoom] = useState([]);
  const [user, setUser] = useState([]);

  async function reqRoom() {
    try {
      const response = await axios.get(`${URL_APP_API}room/${roomId}`);
      setRoom(response.data);
      if (response) {
        console.log("USER :", response.data.user);
        const userData = await axios.get(
          `${URL_APP_API}user/${response.data[0].user}`
        );

        setUser(userData.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    reqRoom();
  }, []);
  console.log(user);
  return (
    <>
      {room.length === 0 || user.length === 0 ? (
        <View style={[styles.container]}>
          <StatusLoading />
        </View>
      ) : (
        <ScrollView style={[styles.body, theme === true ? darktheme.body : ""]}>
          <View style={[styles.container]}>
            <Text
              numberOfLines={1}
              style={[
                roomCSS.title,
                theme ? darktheme.textThemeB : darktheme.textThemeW,
              ]}
            >
              {room[0].title}
            </Text>
            <View>
              <Image
                style={[roomCSS.imgRoom]}
                source={{ uri: room[0].photo.url }}
              />
              <View style={[roomCSS.boxPrice]}>
                <Text style={[roomCSS.price]}>{room[0].price} €</Text>
              </View>
            </View>
            <View style={[roomCSS.boxImgUser]}>
              <Text
                numberOfLines={1}
                style={[
                  roomCSS.title,
                  theme ? darktheme.textThemeB : darktheme.textThemeW,
                ]}
              >
                {room[0].title}
              </Text>
              <Image
                style={[roomCSS.imgUser]}
                source={{ uri: user[0].photo.url }}
              />
            </View>

            <Text
              style={[
                roomCSS.description,
                theme ? darktheme.textThemeB : darktheme.textThemeW,
              ]}
            >
              {room[0].description}
            </Text>
          </View>
        </ScrollView>
      )}
    </>
  );
}

export default HomeScreen;
