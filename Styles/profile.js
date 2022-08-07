import { StyleSheet } from "react-native";

const profile = StyleSheet.create({
  boxImg: {
    borderRadius: 100,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "red",
  },
  margin: {
    marginTop: 20,
    marginBottom: 20,
  },
  align: {
    // backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  newImg: {
    // backgroundColor: "pink",
    width: 90,
    height: 120,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: 280,

    paddingLeft: 5,
    height: 40,
    fontSize: 16,
    // backgroundColor: "blue",
  },
  borderInput: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#EB5A62",
  },
  eye: {
    width: 30,
  },
  seePass: {
    // backgroundColor: "red",
    width: 250,
  },
  button: {
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 180,
    borderWidth: 1,
    borderRadius: 30,
    margin: 10,
  },
  lastButton: {
    marginBottom: 40,
  },
  textButton: {
    fontSize: 18,
  },
});
export default profile;
