import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../Styles/Styles";

function SettingScreen({ theme, setTheme }) {
  async function disconect() {
    console.log("Deconnection");
    // const deconnection = await multiRemove(["token", "userId"]);
  }
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => setTheme(!theme)}>
        <Text>Changer de Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={disconect()}>SE DECONNECTER</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingScreen;
