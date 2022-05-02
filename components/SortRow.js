import { useState } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const SortRow = ({sortNumerical, sortAlphabetical}) => {
    const [ascending, setAscending] = useState(true);

  return (
    <View style={CommonStyles.sort}>
      <View style={styles.numb}>
        <CountButton
            text="123"
            submit={() => {
                sortNumerical(ascending);
                setAscending(!ascending);
                }}
        />
      </View>
      <View style = {styles.alpha}>
        <CountButton
            text="Abc"
            submit={() => {
            sortAlphabetical(ascending);
            setAscending(!ascending);
            }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alpha: {
    flex: 0.5,
    alignItems: "flex-start",
  },
  numb: {
    alignItems: "flex-end",
    flex: 0.5,
  },
});