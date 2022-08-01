import { StyleSheet } from "react-native";

const home = StyleSheet.create({
  search: {
    // backgroundColor: "gray",
    borderColor: "red",
    borderWidth: 1,
    padding: 1,
    paddingLeft: 10,
    margin: 3,
    width: 200,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  box: {
    // backgroundColor: "gray",
    paddingBottom: 20,
    paddingTop: 20,
    // margin: 10,
  },
  price: {
    position: "absolute",
    bottom: 80,
    left: 15,
    padding: 10,
    width: 70,
    fontSize: 20,
    backgroundColor: "#222629",
    color: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgRoom: {
    flex: 1,
    width: 380,
    height: 200,
    borderRadius: 5,
    // marginBottom: 10,
  },
  imgUser: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  boxImgUser: {
    width: 60,
    height: 60,
    // padding: 10,

    // backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    top: -70,
    right: -10,
    zIndex: 10,
  },
  text: {
    height: 50,
    paddingTop: 10,
    width: 370,
    borderBottomWidth: 1,
    fontSize: 18,
  },
});
export default home;
