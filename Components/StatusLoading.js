import React from "react";
import styles from "../Styles/Styles";

import { ActivityIndicator, View } from "react-native";

function StatusLoading() {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="#EB5A62" />
    </View>
  );
}
export default StatusLoading;
