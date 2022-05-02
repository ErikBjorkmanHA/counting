import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  textItem: {
    fontSize: 35,
  },
  addButtonText: {
    fontSize: 30,
    paddingEnd: 10,
    paddingStart: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 5,
    margin: 5,
    paddingEnd: 1,
    paddingStart: 1,
    backgroundColor: "white",
  },
  sort: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:116,
    marginRight:116,
  },
  error: {
    fontSize: 15,
    color: "red",
    textAlign: 'center',
  }
});
