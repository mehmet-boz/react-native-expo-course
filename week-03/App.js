import { StyleSheet, View } from "react-native";
import Menu from "./components/Menu";

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <View style={styles.parent}>
        <View style={styles.child}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  parent: {
    width: 200,
    height: 100,
    padding: 20,
    backgroundColor: "#f55",
    borderRadius: 50,
  },
  child: {
    backgroundColor: "#55f",
    flex: 1,
    borderRadius: 30,
  },
});
