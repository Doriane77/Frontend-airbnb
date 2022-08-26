import { StyleSheet } from "react-native";

const roomCSS = StyleSheet.create({
  title: {
    height: 50,
    paddingTop: 10,
    width: 270,
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
    width: 350,
    height: 220,
    borderRadius: 5,
    marginTop: 15,
  },
  boxImgUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 340,
  },
  imgUser: {
    position: "relative",
    backgroundColor: "red",
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  description: {
    marginTop: 20,
  },
});
export default roomCSS;
