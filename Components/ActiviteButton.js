import React from "react";
import { View, Text } from "react-native";

import darktheme from "../Styles/darkTheme";

function ActiviteButton({ active }) {
  return (
    <>
      {active ? (
        <Text style={[darktheme.textThemeB]}>Desactiver</Text>
      ) : (
        <Text style={[darktheme.textThemeW]}>Activer</Text>
      )}
    </>
  );
}

export default ActiviteButton;
