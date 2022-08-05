import { StyleSheet } from "react-native";

const profile = StyleSheet.create({
  boxImg: {
    borderRadius: 100,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "red",
  },
  align: {
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
});
export default profile;
