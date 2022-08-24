import { StyleSheet } from "react-native";

const roomCSS = StyleSheet.create({
  title: {
    height: 50,
    paddingTop: 10,
    // width: 330,
    // borderBottomWidth: 1,
    fontSize: 18,
  },
  boxPrice: {
    position: "absolute",
    bottom: 20,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222629",
  },
  price: {
    fontSize: 18,
    color: "white",
  },
  imgRoom: {
    // flex: 1,
    width: 350,
    height: 220,
    borderRadius: 5,
    // marginBottom: 10,
  },
  boxImgUser: {
    flexDirection: "row",
    width: 340,
    // backgroundColor: "red",
    // zIndex: 10,
  },
  imgUser: {
    position: "relative",
    top: -30,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  description: {
    marginTop: 20,
  },
});
export default roomCSS;
