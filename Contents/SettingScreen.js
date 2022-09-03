import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import ActiviteButton from "../Components/ActiviteButton";

import darktheme from "../Styles/darkTheme";
import settings from "../Styles/setting";
import styles from "../Styles/Styles";

function SettingScreen({ theme, setTheme }) {
  async function disconect() {
    console.log("Deconnection");
    // const deconnection = await multiRemove(["token", "userId"]);
  }
  return (
    <View style={[styles.container, theme === true ? darktheme.body : ""]}>
      <View
        style={[
          settings.boxActivite,
          theme ? darktheme.textThemeB : darktheme.textThemeW,
        ]}
      >
        <Text>Theme sombre :</Text>
        <TouchableOpacity onPress={() => setTheme(!theme)}>
          <ActiviteButton active={theme} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[settings.buttondisconect]}>
        <Text onPress={disconect()}>SE DECONNECTER</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingScreen;
