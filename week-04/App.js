import { StyleSheet, View } from "react-native";
import Counter from "./components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Counter minValue={0} maxValue={5} initialValue={2} />
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
});
