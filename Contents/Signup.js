import React, { useState } from "react";

const axios = require("axios");

import StatusLoading from "../Components/StatusLoading";

import styles from "../Styles/Styles";

import { Feather } from "@expo/vector-icons";

import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

function SingUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDesccription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valid, setValid] = useState(true);

  const [seePassword, setSeePassword] = useState(true);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);

  const [isLoading, setIsLoading] = useState(null);

  async function handleSubmit() {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `${process.env.URL_APP_API}register`,
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
        <ScrollView style={{ flex: 1 }} scrollEnabled={true}>
          <View style={[styles.container]}>
            <View style={[styles.box]}>
              <Image
                style={styles.Logo}
                source={require("../assets/images/LOGO.jpg")}
              />
              <Text style={[styles.text]}>Sign up</Text>
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
              <TextInput
                style={[styles.input, styles.borderInput]}
                placeholder="Username"
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                }}
                require
              />
              <TextInput
                style={[styles.input, styles.inputDescription]}
                placeholder="Describe yourself in a few words..."
                multiline={true}
                value={description}
                onChangeText={(text) => {
                  setDesccription(text);
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
              <View
                style={[
                  styles.seePassword,
                  styles.borderInput,
                  styles.lastInputPassWord,
                ]}
              >
                <TextInput
                  style={[styles.input, styles.inputPassword]}
                  placeholder="Confirm password"
                  secureTextEntry={seeConfirmPassword}
                  value={confirmPassword}
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                  }}
                  require
                />
                <View>
                  {seeConfirmPassword === true ? (
                    <TouchableOpacity onPress={OnOffSeeConfirmPassword}>
                      <Feather name="eye" size={25} color="gray" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={OnOffSeeConfirmPassword}>
                      <Feather name="eye-off" size={20} color="gray" />
                    </TouchableOpacity>
                  )}
                </View>
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
                <Text style={[styles.textButtonSignin]}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonRegister]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={[styles.textButtonRegister]}>
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
