import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>1</Text>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
        <Text>2</Text>
      </View>
      <View style={styles.box}>
        <Text>3</Text>
        <Text>3</Text>
        <Text>3</Text>
      </View>
      <View style={styles.box3}>
        <Text>4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a5a1ff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly", //yatayda merkez
    alignItems: "flex-start", //dikeyde sol
  },
  box: {
    width: 50,
    backgroundColor: "#f55",
    alignSelf: "stretch",
  },
  box2: {
    width: 75,
    backgroundColor: "#f55",
    alignSelf: "center",
  },
  box3: {
    width: 20,
    backgroundColor: "#f55",
  },
});
