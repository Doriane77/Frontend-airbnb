import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";
import home from "../Styles/home";

import handleChange from "../Function/handleChange";

function HomeScren({ theme }) {
  // const [search, setSearch] = useState("");
  const [formValue, setFormValue] = useState({
    search: "",
    page: 1,
    limit: 10,
  });
  const { search, page, limit } = formValue;
  console.log("search :", search, "page :", page, "limit :", limit);
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
    </KeyboardAwareScrollView>
  );
}

export default HomeScren;
