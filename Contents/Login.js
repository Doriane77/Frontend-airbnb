import React, { useState } from "react";
import Toast from "react-native-toast-message";

const axios = require("axios");

import styles from "../Styles/Styles";

import StatusLoading from "../Components/StatusLoading";

import { Feather } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { URL_APP_API } from "@env";
import { useNavigation } from "@react-navigation/native";

import handleChange from "../Function/handleChange";

function Login({ setAuthToken }) {
  const navigation = useNavigation();

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
          style={styles.body}
          keyboardVerticalOffset={100}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={[styles.container]}>
            <View style={[styles.box]}>
              <Image
                style={styles.Logo}
                source={require("../assets/images/LOGO.jpg")}
              />
              <Text style={[styles.text]}>Sign in</Text>
            </View>
            <View>
              <TextInput
                style={[styles.input, styles.borderInput]}
                placeholder="Email"
                name="email"
                onChangeText={(text) =>
                  handleChange("email", text, formValue, setFormValue)
                }
                value={email}
                require
              />

              <View style={[styles.seePassword, styles.borderInput]}>
                <TextInput
                  style={[styles.input, styles.inputPassword]}
                  placeholder="Password"
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
                      <Feather name="eye" size={25} color="gray" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={OnOffSeePassword}>
                      <Feather name="eye-off" size={20} color="gray" />
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
                <Text style={[styles.textButtonSignin]}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonRegister]}
                onPress={() => navigation.navigate("SingUp")}
              >
                <Text style={[styles.textButtonRegister]}>
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
