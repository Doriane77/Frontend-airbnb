import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { URL_APP_API } from "@env";
import axios from "axios";

import handleChange from "../Function/handleChange";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";
import profile from "../Styles/profile";

function ProfileScreen({ theme, userId }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [seePassword, setSeePassword] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
    description: "",
  });
  const { email, password, username, name, description } = formValue;
  console.log(
    "email :",
    email,
    "password :",
    password,
    "username : ",
    username,
    "description :",
    description
  );
  function OnOffSeePassword() {
    setSeePassword(!seePassword);
  }
  // console.log(user.url);
  async function userData() {
    try {
      console.log("user :", userId);

      const UserData = await axios.get(`${URL_APP_API}user/${userId}`);
      setUser(UserData.data);
      console.log("USER :", user);
      setIsLoading(false);
      console.log("UserData :", UserData.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    userData();
  }, []);
  console.log("isLoading :", isLoading);
  return (
    <KeyboardAwareScrollView
      style={[styles.body, theme === true ? darktheme.body : ""]}
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {isLoading ? (
        <Text>Sa charge</Text>
      ) : (
        <View
          style={[
            styles.container,
            styles.body,
            theme === true ? darktheme.body : "",
          ]}
        >
          {/* <Text>{user.photo.url}</Text> */}
          <Image style={[profile.boxImg]} source={{ uri: user.photo.url }} />
        </View>
      )}

      <View
        style={[
          styles.container,
          styles.body,
          theme === true ? darktheme.body : "",
        ]}
      >
        <View style={[profile.align, profile.margin]}>
          <Image style={[profile.boxImg]} />
          <View style={[profile.newImg]}>
            <TouchableOpacity>
              <MaterialIcons
                name="add-a-photo"
                size={34}
                color={theme === true ? "white" : "gray"}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="add-photo-alternate"
                size={34}
                color={theme === true ? "white" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={[
            profile.input,
            profile.borderInput,
            theme === true ? darktheme.color : styles.colorText,
          ]}
          inputType="email"
          placeholder="new email"
          placeholderTextColor={theme === true ? "white" : "gray"}
          name="email"
          onChangeText={(text) =>
            handleChange("email", text, formValue, setFormValue)
          }
          value={email}
        />
        <View
          style={[
            profile.align,
            profile.borderInput,
            theme === true ? darktheme.color : styles.colorText,
          ]}
        >
          <TextInput
            style={[
              profile.input,
              profile.seePass,
              theme === true ? darktheme.color : styles.colorText,
            ]}
            inputType="password"
            placeholder="new password"
            secureTextEntry={seePassword}
            placeholderTextColor={theme === true ? "white" : "gray"}
            name="password"
            onChangeText={(text) =>
              handleChange("password", text, formValue, setFormValue)
            }
          />
          <View style={[profile.eye]}>
            {seePassword === true ? (
              <TouchableOpacity onPress={OnOffSeePassword}>
                <Feather
                  name="eye"
                  size={25}
                  color={theme === true ? "white" : "gray"}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={OnOffSeePassword}>
                <Feather
                  name="eye-off"
                  size={20}
                  color={theme === true ? "white" : "gray"}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TextInput
          style={[
            profile.input,
            profile.borderInput,
            theme === true ? darktheme.color : styles.colorText,
          ]}
          inputType="text"
          placeholder="new username"
          placeholderTextColor={theme === true ? "white" : "gray"}
          name="username"
          onChangeText={(text) =>
            handleChange("username", text, formValue, setFormValue)
          }
        />
        <TextInput
          style={[
            profile.input,
            profile.borderInput,
            theme === true ? darktheme.color : styles.colorText,
          ]}
          inputType="text"
          placeholder="new name"
          placeholderTextColor={theme === true ? "white" : "gray"}
          name="name"
          onChangeText={(text) =>
            handleChange("name", text, formValue, setFormValue)
          }
        />
        <TextInput
          style={[
            profile.input,
            profile.borderInput,
            theme === true ? darktheme.color : styles.colorText,
          ]}
          inputType="text"
          placeholder="new description"
          placeholderTextColor={theme === true ? "white" : "gray"}
          name="description"
          onChangeText={(text) =>
            handleChange("description", text, formValue, setFormValue)
          }
        />
        <TouchableOpacity
          style={[
            profile.button,
            theme ? darktheme.textThemeB : darktheme.textThemeW,
          ]}
        >
          <Text
            style={[
              profile.textButton,
              theme ? darktheme.textThemeB : darktheme.textThemeW,
            ]}
          >
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            profile.button,
            profile.lastButton,
            theme ? darktheme.textThemeB : darktheme.textThemeW,
          ]}
        >
          <Text
            style={[
              profile.textButton,
              theme ? darktheme.textThemeB : darktheme.textThemeW,
            ]}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default ProfileScreen;
