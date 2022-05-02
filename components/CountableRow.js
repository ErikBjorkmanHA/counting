import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const CountableRow = ({ countable, changeCounts, index, removeCountable }) => (
  <View style={CommonStyles.row}>
    
    <View style={styles.nameColumn}>
      <TouchableOpacity onLongPress={() => removeCountable(countable.name)}>
        <Text style={CommonStyles.textItem}>
          {countable.name}
        </Text>
      </TouchableOpacity>
    </View>
    


    <View style={styles.buttonColumn}>
      {countable.count < 10 && //Hide button if count is bigger than 10 ()
        <CountButton
        text="+"
        submit={() => {
          changeCounts(1, index);
        }}
    />
      }
    </View>

    <View style={styles.countColumn}>
      <Text style={CommonStyles.textItem}>{countable.count}</Text>
    </View>

    <View style={styles.button2Column}>
    {countable.count > 0 && //Hide button if count is 0
        <CountButton
          text="-"
          submit={() => {
            changeCounts(-1, index);
          }}
        />
      }
    </View>
  </View>
);

const styles = StyleSheet.create({
  nameColumn: {
    flex: 0.59,
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  countColumn: {
    flex: 0.11,
    alignItems: "flex-end",
    paddingEnd: 20,
  },
  buttonColumn: {
    flex: 0.15,
  },
  button2Column: {
    flex:0.15,
  },
});
