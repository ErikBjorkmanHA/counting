import { useState } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  //clearButonMode only works on IOS
  return (
    <View style={CommonStyles.row}>
      <View style={styles.inputColumn}>
        <TextInput placeholder=" Enter name" onChangeText={setName} maxLength = {30} clearButtonMode="always" value = {name} />
      </View>
      <View style = {styles.buttonColumn}>
      <CountButton
        text="Add"
        submit={() => {
          addNewCountable(name);
          Keyboard.dismiss();
          setName("");
        }}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputColumn: {
    flex: 0.7,
    alignItems: "flex-start",
  },
  buttonColumn: {
    alignItems: "flex-end",
    flex: 0.3,
  },
});
