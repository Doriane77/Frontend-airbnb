import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ActiviteButton from "../Components/ActiviteButton";

import darktheme from "../Styles/darkTheme";
import settings from "../Styles/setting";
import styles from "../Styles/Styles";

function SettingScreen({ theme, setTheme }) {
  async function disconect() {
    try {
      console.log("Deconnection");
      const deconnection = await AsyncStorage.multiRemove([
        "authToken",
        "userId",
      ]);
      console.log("log deco :", deconnection);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={[styles.container, theme === true ? darktheme.body : ""]}>
      <View
        style={[
          settings.boxActivite,
          theme ? darktheme.textThemeB : darktheme.textThemeW,
        ]}
      >
        <Text style={[theme ? darktheme.textThemeB : darktheme.textThemeW]}>
          Theme sombre :
        </Text>
        <TouchableOpacity onPress={() => setTheme(!theme)}>
          <ActiviteButton active={theme} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          settings.buttondisconect,
          theme ? darktheme.textThemeB : darktheme.textThemeW,
        ]}
      >
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
