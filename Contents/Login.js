import React, { useState } from "react";
import Toast from "react-native-toast-message";

const axios = require("axios");

import styles from "../Styles/Styles";
import darktheme from "../Styles/darkTheme";

import StatusLoading from "../Components/StatusLoading";

import { Feather } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { URL_APP_API } from "@env";
import { useNavigation } from "@react-navigation/native";

import handleChange from "../Function/handleChange";

function Login({ navigation, setAuthToken, theme, setUserId }) {
  // const navigation = useNavigation();
  console.log("Darktheme :", theme);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [seePassword, setSeePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(null);

  const [valid, setValid] = useState(true);

  const { email, password } = formValue;

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const response = await axios.post(`${URL_APP_API}login`, {
        email: email,
        password: password,
      });
      setValid(true);
      setIsLoading(false);
      const data = response.data[0];

      if (response.data.message !== undefined) {
        Toast.show({
          type: "error",
          text1: `${response.data.message} ! `,
        });
      } else {
        setUserId(data.id);
        const token = data.token;
        setAuthToken(token);
        Toast.show({
          type: "success",
          text1: ` ${data.name} `,
          text2: "Bienvenue sur Airbnb",
        });
      }
    } catch (error) {
      console.log("ERROR :", error.response.data);
      setValid(false);
      setIsLoading(false);
    }
  }
  function OnOffSeePassword() {
    setSeePassword(!seePassword);
  }
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <StatusLoading />
      ) : (
        <KeyboardAwareScrollView
          style={[styles.body, theme === true ? darktheme.body : ""]}
          keyboardVerticalOffset={100}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* <View style={[styles.container]}> */}
          <View
            style={[styles.container, theme === true ? darktheme.body : ""]}
          >
            <View style={[styles.box]}>
              <Image
                style={[
                  styles.Logo,
                  theme === true ? darktheme.body : styles.body,
                ]}
                source={require("../assets/images/LOGO.png")}
              />
              <Text
                style={[
                  styles.text,
                  theme === true ? darktheme.color : styles.colorText,
                ]}
              >
                Sign in
              </Text>
            </View>
            <View>
              <TextInput
                inputType="email"
                style={[
                  styles.input,
                  styles.borderInput,
                  theme === true ? darktheme.color : styles.colorText,
                ]}
                placeholder="Email"
                placeholderTextColor={theme === true ? "white" : "gray"}
                name="email"
                onChangeText={(text) =>
                  handleChange("email", text, formValue, setFormValue)
                }
                value={email}
                require
              />

              <View
                style={[styles.align, styles.seePassword, styles.borderInput]}
              >
                <TextInput
                  style={[
                    styles.input,
                    styles.inputPassword,
                    theme === true ? darktheme.color : styles.colorText,
                  ]}
                  placeholder="Password"
                  placeholderTextColor={theme === true ? "white" : "gray"}
                  secureTextEntry={seePassword}
                  name="password"
                  onChangeText={(text) =>
                    handleChange("password", text, formValue, setFormValue)
                  }
                  value={password}
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
            </View>

            <View style={[styles.box]}>
              <View style={[styles.boxErrorPass]}>
                <Text style={[valid ? styles.none : styles.errorPass]}>
                  Incorrect email password
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
                  Sign in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonRegister]}
                onPress={() => navigation.navigate("SingUp")}
              >
                <Text
                  style={[
                    styles.textButtonRegister,
                    theme === true ? darktheme.color : styles.colorText,
                  ]}
                >
                  No account ? Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </View>
  );
}

export default Login;
