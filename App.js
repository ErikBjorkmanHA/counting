import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AddRow } from "./components/AddRow";
import { CountableRow } from "./components/CountableRow";
import { SortRow } from "./components/SortRow";
import { loadCountables, saveCountables } from "./storage/Storage";
import { CommonStyles } from "./styles/CommonStyles";

const intialCountables = [
  { name: "Crow", count: 0 },
  { name: "Woodpecker", count: 3 },
];

export default function App() {
  const [countables, setCountables] = useState(intialCountables);
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    loadCountables().then((result) => setCountables(result));
  }, []);

  const changeCounts = (amount, index) => {
    if(countables[index].count != 0 || amount == 1){ //Can't go into negative numbers
      const newState = [...countables];
      newState[index].count += amount;
      setCountables(newState);
      saveCountables(newState);
    }
  };

  const addNewCountable = (name) => {
    if(name == ""){
      setInputError("Field is empty")
    } else if (name.length > 20){
      setInputError("Input is too long")
    } else {
      if(countables.some(c => c.name === name)){ //Check if name already exists in array
        setInputError("This item already exists");
      } else {
        setInputError(""); //If there is an error message, we have to remove it when inserting a valid input
        const newState = [...countables, { name, count: 0 }];
        setCountables(newState);
        saveCountables(newState);
      }
    }
  };

  const removeCountable = (name) => {
    const newState = countables.filter((item) => item.name != name);
    setCountables(newState);
    saveCountables(newState);
  }

  const sortNumerical = (ascending) => {
    const newState = [...countables];
    if(ascending){
      newState.sort((a,b) => a.count < b.count ? 1 : -1);
    } else {
      newState.sort((a,b) => a.count > b.count ? 1 : -1);
    }

    setCountables(newState);
    saveCountables(newState);
  }

  const sortAlphabetical = (ascending) => {
    const newState = [...countables];
    if(ascending){
      newState.sort((a,b) => a.name < b.name ? 1 : -1);
    } else {
      newState.sort((a,b) => a.name > b.name ? 1 : -1);
    }

    setCountables(newState);
    saveCountables(newState);
  }

  // https://medium.com/@nickyang0501/keyboardavoidingview-not-working-properly-c413c0a200d4
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {countables.map((countable, index) => (
            <CountableRow
              countable={countable}
              key={countable.name}
              changeCounts={changeCounts}
              removeCountable={removeCountable}
              index={index}
            />
          ))}
          <View style={{ flex: 1 }} />
        </ScrollView>
        <SortRow sortNumerical={sortNumerical} sortAlphabetical={sortAlphabetical}/>
        {inputError.length > 0 && //Hide field for error message if the text is empty
          <Text style={CommonStyles.error}>{inputError}</Text>
        }
        <AddRow addNewCountable={addNewCountable} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "flex-end",
  },
});
