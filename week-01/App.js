import { View, StyleSheet, Text } from "react-native";

function App() {
  //JSX
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#55f",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 32,
  },
});

export default App;
