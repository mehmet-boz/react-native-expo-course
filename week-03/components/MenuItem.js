import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const MenuItem = ({ icon, title, active }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: active ? "#334455" : "33445511" },
      ]}
    >
      <Ionicons name={icon} size={24} color={active ? "#efeffe" : "#334455"} />
      <Text
        style={[styles.buttonText, { color: active ? "#efeffe" : "#334455" }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#33445511",
    borderColor: "#33445555",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    flexDirection: "row",
    columnGap: 6,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 22,
    color: "#334455",
  },
});

export default MenuItem;
