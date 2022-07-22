import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import Login from "./Contents/Login";
import SingUp from "./Contents/Signup";
import Home from "./Contents/Home";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  console.log("authtoken :", authToken);

  const setToken = async (token) => {
    try {
      if (token) {
        console.log("token :", token);
        await AsyncStorage.setItem("authToken", token);
      } else {
        AsyncStorage.removeItem("authToken");
      }
      console.log("token :", token);
      setAuthToken(token);
    } catch (error) {
      console.log(error);
    }
  };
  if (authToken) {
    setToken(authToken);
  }
  useEffect(() => {
    const bootstrapAsync = async () => {
      const authToken = await AsyncStorage.getItem("authToken");
      setAuthToken(authToken);
      setIsLoading(false);
    };
    bootstrapAsync();
  }, []);
  if (isLoading === true) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authToken ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Login">
              {(props) => (
                <Login
                  {...props}
                  setAuthToken={setAuthToken}
                  authToken={authToken}
                  setToken={setToken}
                />
              )}
            </Stack.Screen>

            <Stack.Screen name="SingUp" component={SingUp} />
          </>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
