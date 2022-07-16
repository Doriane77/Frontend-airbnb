import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import Login from "./Contents/Login";
import SingUp from "./Contents/Signup";

const Stack = createNativeStackNavigator();

function App() {
  const [authToken, setAuthToken] = useState(null);
  // useEffect(() => {
  const storeData = async (authToken) => {
    try {
      await AsyncStorage.setItem("authToken", authToken);
    } catch (error) {
      console.log(error);
      AsyncStorage.removeItem("authToken");
    }
  };
  // }, [authToken]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Login">
          {() => <Login setAuthToken={setAuthToken} authToken={authToken} />}
        </Stack.Screen>

        <Stack.Screen name="SingUp" component={SingUp} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
