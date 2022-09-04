import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ActiviteButton from "../Components/ActiviteButton";

import darktheme from "../Styles/darkTheme";
import settings from "../Styles/setting";
import styles from "../Styles/Styles";

function SettingScreen({ navigation, theme, setTheme, setAuthToken }) {
  console.log("setting theme :", theme);

  const storeTheme = async (dark) => {
    try {
      console.log("dark :", dark);
      await AsyncStorage.setItem("theme", dark);
    } catch (error) {
      console.log(error);
    }
  };

  function changeTheme() {
    setTheme(!theme);
    storeTheme(String(theme));
  }
  async function disconect() {
    try {
      console.log("Deconnection");
      // const deconnection = await AsyncStorage.multiRemove([
      //   "authToken",
      //   "userId",
      // ]);
      // console.log("log deco :", deconnection);
      setAuthToken(null);
      await AsyncStorage.clear();
      // await AsyncStorage.removeItem("authToken");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View
      style={[
        styles.container,
        theme === true ? darktheme.body : darktheme.textThemeW,
      ]}
    >
      <View
        style={[
          settings.boxActivite,
          theme ? darktheme.textThemeB : darktheme.textThemeW,
        ]}
      >
        <Text style={[theme ? darktheme.textThemeB : darktheme.textThemeW]}>
          Theme sombre :
        </Text>
        <TouchableOpacity onPress={() => changeTheme()}>
          <ActiviteButton active={theme} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[settings.buttondisconect]}>
        <Text
          style={[theme ? darktheme.textThemeB : darktheme.textThemeW]}
          onPress={() => disconect()}
        >
          SE DECONNECTER
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingScreen;
