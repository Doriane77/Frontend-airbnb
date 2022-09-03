import React from "react";
import { View, Text } from "react-native";

function ActiviteButton({ active, theme }) {
  console.log(active);
  return (
    <>
      {active ? (
        <View>
          <Text style={[]}>Desactiver</Text>
        </View>
      ) : (
        <View>
          <Text>Activer</Text>
        </View>
      )}
    </>
  );
}

export default ActiviteButton;
