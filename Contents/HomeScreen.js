import React, { useEffect, useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";
import home from "../Styles/home";

import handleChange from "../Function/handleChange";

import { URL_APP_API } from "@env";
const axios = require("axios");

function HomeScren({ theme }) {
  // const [search, setSearch] = useState("");
  const [formValue, setFormValue] = useState({
    search: "",
    page: 1,
    limit: 10,
  });
  const [data, setData] = useState([]);
  const { search, page, limit } = formValue;
  console.log("search :", search, "page :", page, "limit :", limit);
  console.log("data :", data);

  async function allRooms() {
    try {
      const response = await axios.get(`${URL_APP_API}rooms`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
    allRooms();
  }, []);
  return (
    <KeyboardAwareScrollView
      style={[styles.body, theme === true ? darktheme.body : ""]}
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={[styles.container, theme === true ? darktheme.body : ""]}>
        <TextInput
          style={[
            home.search,
            theme === true ? darktheme.color : styles.colorText,
          ]}
          placeholder="Search"
          name="search"
          placeholderTextColor={theme === true ? "white" : "gray"}
          onChangeText={(text) =>
            handleChange("search", text, formValue, setFormValue)
          }
          value={search}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>BOX DES ROOMS</Text>
        {data.map((room, index) => {
          console.log(room);
          return (
            <View>
              <Text>{room.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}

export default HomeScren;
