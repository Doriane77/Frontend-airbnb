import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Login from "./Contents/Login";
import SingUp from "./Contents/Signup";
import HomeScreen from "./Contents/HomeScreen";
import ProfileScreen from "./Contents/ProfileScreen";
import AroundMeScreen from "./Contents/AroundMeScreen";

import styles from "./Styles/Styles";
import darkTheme from "./Styles/darkTheme";

const axios = require("axios");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);

  // const [theme, setTheme] = useState(true);
  const [theme, setTheme] = useState(false);

  const setToken = async (token) => {
    try {
      if (token) {
        await AsyncStorage.setItem("authToken", token);
      } else {
        AsyncStorage.removeItem("authToken");
      }
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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme === true ? "#EB5A62" : "white",
          },
          headerTintColor: theme === true ? "white" : "",
        }}
      >
        {authToken ? (
          <Stack.Screen
            name="Tab"
            options={{
              headerShown: false,
            }}
          >
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  animationEnabled: false,
                  tabBarActiveTintColor: "#EB5A62",
                  tabBarInactiveTintColor: theme ? "white" : "gray",
                  tabBarActiveBackgroundColor: theme ? "#222629" : "white",
                  tabBarInactiveBackgroundColor: theme ? "#222629" : "white",
                }}
              >
                <Tab.Screen
                  name="TabHome"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"ios-home"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Home"
                        options={{
                          title: "Airbnb",
                          headerStyle: {
                            backgroundColor:
                              theme === true ? "#EB5A62" : "white",
                          },
                          headerTitleAlign: "center",
                          headerTitleStyle: {
                            color: theme === true ? "white" : "red",
                          },
                        }}
                      >
                        {() => <HomeScreen theme={theme} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabAroundMe"
                  options={{
                    tabBarLabel: "Around me",

                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Around me"
                        options={{
                          title: "Around me",
                          headerStyle: {
                            backgroundColor:
                              theme === true ? "#EB5A62" : "white",
                          },
                          headerTitleAlign: "center",
                          headerTitleStyle: {
                            color: theme === true ? "white" : "red",
                          },
                        }}
                      >
                        {() => <AroundMeScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="TabProfile"
                  options={{
                    tabBarLabel: "My profile",
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="user" size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Profile"
                        options={{
                          title: "User Profile",
                          headerStyle: {
                            backgroundColor:
                              theme === true ? "#EB5A62" : "white",
                          },
                          // headerStyle: { backgroundColor: "red" },
                          headerTitleAlign: "center",
                          headerTitleStyle: {
                            color: theme === true ? "white" : "red",
                          },
                        }}
                      >
                        {() => <ProfileScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="tabSettings"
                  options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"ios-options"}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Settings"
                        options={{
                          title: "Settings",
                          headerStyle: {
                            backgroundColor:
                              theme === true ? "#EB5A62" : "white",
                          },
                          // headerStyle: { backgroundColor: "red" },
                          headerTitleAlign: "center",
                          headerTitleStyle: {
                            color: theme === true ? "white" : "red",
                          },
                        }}
                      >
                        {() => <ProfileScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
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
                  theme={theme}
                />
              )}
            </Stack.Screen>

            <Stack.Screen name="SingUp">
              {(props) => (
                <SingUp
                  {...props}
                  setAuthToken={setAuthToken}
                  authToken={authToken}
                  setToken={setToken}
                  theme={theme}
                />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
