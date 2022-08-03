import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import handleChange from "../Function/handleChange";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";

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
      {/* <Image source={}/> */}
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
