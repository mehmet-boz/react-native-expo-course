import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Privacy")}
        style={styles.button}
      >
        <Text>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity   onPress={() => navigation.navigate("Content")} style={styles.button}>
        <Text>Content Settings</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 10,
  },
});

export default SettingsScreen;
