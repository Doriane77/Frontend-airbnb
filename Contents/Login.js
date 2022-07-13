import React, { useState } from "react";

const axios = require("axios");

import styles from "../Styles/Styles";

import StatusLoading from "../Components/StatusLoading";

import { Feather } from "@expo/vector-icons";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [seePassword, setSeePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(null);

  const [valid, setValid] = useState(true);

  async function handleSubmit() {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.URL_APP_API}login`,
        { email: email, password: password },
        {
          headers: {
            email: email, // lya@gmail.com
            password: password, // azerty
          },
        }
      );
      setValid(true);
      setIsLoading(false);
      console.log("error response", response);
    } catch (error) {
      console.log(error.response);
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
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={[styles.container, styles.body]}>
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
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                require
              />

              <View style={[styles.seePassword, styles.borderInput]}>
                <TextInput
                  style={[styles.input, styles.inputPassword]}
                  placeholder="Password"
                  secureTextEntry={seePassword}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
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
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

export default Login;
