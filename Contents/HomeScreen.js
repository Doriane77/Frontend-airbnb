import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  Linking,
  TouchableHighlight,
  Button,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";
import home from "../Styles/home";

import handleChange from "../Function/handleChange";

import { URL_APP_API } from "@env";
import StatusLoading from "../Components/StatusLoading";
const axios = require("axios");

function HomeScren({ navigation, theme }) {
  // const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [formValue, setFormValue] = useState({
    search: "",
    page: 1,
    limit: 10,
  });
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  const { search, page, limit } = formValue;
  console.log("search :", search, "page :", page, "limit :", limit);

  async function allRooms() {
    try {
      const response = await axios.get(`${URL_APP_API}rooms`);
      const resUsers = await axios.get(`${URL_APP_API}users`);
      setRooms(response.data);
      setUsers(resUsers.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(async () => {
    allRooms();
  }, []);
  return (
    <>
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
      </KeyboardAwareScrollView>
      {isLoading ? (
        <StatusLoading />
      ) : (
        <FlatList
          style={[styles.body, theme === true ? darktheme.body : ""]}
          data={rooms}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                // onPress={() => navigation.navigate("SingUp")}
                onPress={() => navigation.navigate("Room", { id: item.id })}
                style={[styles.container, home.box]}
              >
                <Image
                  style={[home.imgRoom]}
                  source={{ uri: item.photo.url }}
                />
                <View style={[home.boxPrice]}>
                  <Text style={[home.price]}>{item.price} €</Text>
                </View>
                <View>
                  <Text
                    numberOfLines={1}
                    style={[
                      home.text,
                      theme ? darktheme.textThemeB : darktheme.textThemeW,
                    ]}
                  >
                    {item.title}
                  </Text>

                  {users.map((elem, index) => {
                    return (
                      <View key={elem.id}>
                        {String(item.user) === String(elem.id) ? (
                          <View
                            style={[
                              home.boxImgUser,
                              styles.container,
                              theme
                                ? darktheme.textThemeB
                                : darktheme.textThemeW,
                            ]}
                          >
                            <Image
                              style={[home.imgUser]}
                              source={{ uri: elem.photo.url }}
                            />
                          </View>
                        ) : null}
                      </View>
                    );
                  })}
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </>
  );
}

export default HomeScren;
