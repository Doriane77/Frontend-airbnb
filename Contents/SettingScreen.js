import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ActiviteButton from "../Components/ActiviteButton";

import darktheme from "../Styles/darkTheme";
import settings from "../Styles/setting";
import styles from "../Styles/Styles";

function SettingScreen({
  navigation,
  theme,
  setTheme,
  setAuthToken,
  setUserId,
}) {
  const storeTheme = async (dark) => {
    try {
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
      await AsyncStorage.multiRemove(["authToken", "userId"]);

      // await AsyncStorage.clear(); supprime toute les données du AsyncStorage
      // await AsyncStorage.removeItem("authToken"); sup un elem du AsyncStorage
      // await AsyncStorage.removeItem("userId");sup un elem du AsyncStorage

      setAuthToken(null);
      setUserId(null);
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
