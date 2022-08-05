import React, { useState } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import handleChange from "../Function/handleChange";

import { MaterialIcons } from "@expo/vector-icons";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";
import profile from "../Styles/profile";

function ProfileScreen({ theme }) {
  const [formValue, setFormValue] = useState({
    email: "",
  });
  const { email } = formValue;
  return (
    <View
      style={[
        styles.container,
        styles.body,
        theme === true ? darktheme.body : "",
      ]}
    >
      <View style={[profile.align]}>
        <Image style={[profile.boxImg]} />
        <View style={[profile.newImg]}>
          <TouchableOpacity>
            <MaterialIcons
              name="add-a-photo"
              size={34}
              color={theme === true ? "white" : "tomato"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="add-photo-alternate"
              size={34}
              color={theme === true ? "white" : "tomato"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        inputType="email"
        placeholder="new email"
        placeholderTextColor={theme === true ? "white" : "gray"}
        name="email"
        onChangeText={(text) =>
          handleChange("email", text, formValue, setFormValue)
        }
        value={email}
      />
    </View>
  );
}

export default ProfileScreen;
