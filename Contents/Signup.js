import React, { useState } from "react";

const axios = require("axios");

import StatusLoading from "../Components/StatusLoading";

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import { URL_APP_API } from "@env";
import handleChange from "../Function/handleChange";
import * as ImagePicker from "expo-image-picker";

function SingUp({ navigation, theme }) {
  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
    description: "",
    password: "",
    confirmPassword: "",
    image: null,
    uploading: false,
  });

  const {
    email,
    username,
    description,
    password,
    confirmPassword,
    image,
    uploading,
  } = formValue;

  const [valid, setValid] = useState(true);

  const [seePassword, setSeePassword] = useState(true);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);

  const [isLoading, setIsLoading] = useState(null);

  async function handleSubmit() {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== "" &&
      image !== null
    ) {
      setIsLoading(true);
      try {
        const cameraRollPerm =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(
          "email :",
          email,
          "username :",
          username,
          "description :",
          description,
          "password :",
          password,
          "confirm pasword :",
          confirmPassword
        );
        const response = await axios.post(
          `${URL_APP_API}register`,
          {
            email: email,
            username: username,
            description: description,
            password: password,
            confirmPassword: confirmPassword,
          },
          {
            headers: {
              email: email,
              username: username,
              description: description,
              password: password,
              confirmPassword: confirmPassword,
            },
          }
        );
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        setIsLoading(false);
        console.log(error.response);
      }
      setValid(true);
    } else {
      setIsLoading(false);
      setValid(false);
    }
  }

  function OnOffSeePassword() {
    setSeePassword(!seePassword);
  }
  function OnOffSeeConfirmPassword() {
    setSeeConfirmPassword(!seeConfirmPassword);
  }
  return (
    <>
      {isLoading ? (
        <StatusLoading />
      ) : (
        <ScrollView
          style={[
            { flex: 1 },
            styles.body,
            theme === true ? darktheme.body : "",
          ]}
          scrollEnabled={true}
        >
          <View style={[styles.container]}>
            <View style={[styles.seePassword, styles.box]}>
              <Image
                style={styles.Logo}
                source={require("../assets/images/LOGO.png")}
              />
              <Text
                style={[
                  styles.text,
                  theme === true ? darktheme.color : styles.colorText,
                ]}
              >
                Sign up
              </Text>
            </View>
            <View>
              <TextInput
                style={[styles.input, styles.borderInput]}
                placeholder="Email"
                placeholderTextColor={theme === true ? "white" : "gray"}
                value={email}
                onChangeText={(text) => {
                  handleChange("email", text, formValue, setFormValue);
                }}
                require
              />
              <TextInput
                style={[styles.input, styles.borderInput]}
                placeholder="Username"
                placeholderTextColor={theme === true ? "white" : "gray"}
                value={username}
                onChangeText={(text) => {
                  handleChange("username", text, formValue, setFormValue);
                }}
                require
              />
              <TextInput
                style={[styles.input, styles.inputDescription]}
                placeholder="Describe yourself in a few words..."
                placeholderTextColor={theme === true ? "white" : "gray"}
                multiline={true}
                value={description}
                onChangeText={(text) => {
                  handleChange("description", text, formValue, setFormValue);
                }}
                require
              />
              <View
                style={[styles.align, styles.seePassword, styles.borderInput]}
              >
                <TextInput
                  style={[styles.input, styles.inputPassword]}
                  placeholder="Password"
                  placeholderTextColor={theme === true ? "white" : "gray"}
                  secureTextEntry={seePassword}
                  value={password}
                  onChangeText={(text) => {
                    handleChange("password", text, formValue, setFormValue);
                  }}
                  require
                />
                <View>
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
              <View
                style={[styles.align, styles.seePassword, styles.borderInput]}
              >
                <TextInput
                  style={[styles.input, styles.inputPassword]}
                  placeholder="Confirm password"
                  placeholderTextColor={theme === true ? "white" : "gray"}
                  secureTextEntry={seeConfirmPassword}
                  value={confirmPassword}
                  onChangeText={(text) => {
                    handleChange(
                      "confirmPassword",
                      text,
                      formValue,
                      setFormValue
                    );
                  }}
                  require
                />
                <View>
                  {seeConfirmPassword === true ? (
                    <TouchableOpacity onPress={OnOffSeeConfirmPassword}>
                      <Feather
                        name="eye"
                        size={25}
                        color={theme === true ? "white" : "gray"}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={OnOffSeeConfirmPassword}>
                      <Feather
                        name="eye-off"
                        size={20}
                        color={theme === true ? "white" : "gray"}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <View
                style={[
                  styles.seePassword,
                  styles.borderInput,
                  styles.lastInputPassWord,
                  styles.align,
                  styles.input,
                ]}
              >
                <Text
                  style={[
                    styles.inputPicture,
                    theme === true ? darktheme.color : { color: "gray" },
                  ]}
                >
                  Picture account
                </Text>
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

            <View style={[styles.box]}>
              <View style={[valid ? styles.none : styles.boxErrorPass]}>
                <Text style={[valid ? styles.none : styles.errorPass]}>
                  Passwords must be the same
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.buttonSignin]}
                onPress={handleSubmit}
              >
                <Text
                  style={[
                    styles.textButtonSignin,
                    theme === true ? darktheme.color : styles.colorText,
                  ]}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonRegister]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={[theme === true ? darktheme.color : styles.colorText]}
                >
                  Already have an account ? Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}

export default SingUp;
