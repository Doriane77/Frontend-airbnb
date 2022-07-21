import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  align: {
    flexDirection: "row",
  },
  box: {
    alignItems: "center",
    marginTop: 30,
    // backgroundColor: "red",
  },
  colorText: {
    color: "black",
  },
  Logo: {
    width: 120,
    height: 120,
    backgroundColor: "white",
  },
  text: {
    marginTop: 25,
    marginBottom: 30,
    // color: "gray",
    fontSize: 30,
  },

  borderInput: {
    borderBottomWidth: 1,
    borderColor: "#EB5A62",
  },
  input: {
    // backgroundColor: "purple",
    marginLeft: 3,
    width: 280,
    paddingLeft: 5,
    paddingBottom: 10,
    height: 40,
    marginBottom: 20,
    fontSize: 18,
  },
  inputDescription: {
    // backgroundColor: "purple",
    paddingRight: 10,
    height: 80,
    borderColor: "#EB5A62",
    borderWidth: 1,
    overflow: "hidden",
  },
  inputPassword: {
    // backgroundColor: "pink",
    width: 250,
    // paddingLeft: 0,
    marginLeft: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },

  seePassword: {
    // backgroundColor: "pink",
    marginBottom: 20,
    marginLeft: 3,

    alignItems: "center",
  },
  lastInputPassWord: {
    marginBottom: 0,
  },
  inputPicture: { flex: 1, fontSize: 18, color: "gray" },

  none: {
    display: "none",
  },
  boxErrorPass: {
    // backgroundColor: "green",
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  errorPass: {
    color: "red",
  },
  buttonSignin: {
    //   and buttonSignUp in Login page
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 180,
    // marginTop: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#EB5A62",
  },
  textButtonSignin: {
    fontSize: 20,
    // color: "gray",
  },
  buttonRegister: {
    marginVertical: 20,
  },
  textButtonRegister: {
    // color: "gray",
  },
});
export default styles;
