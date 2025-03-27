import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Counter = ({ minValue, maxValue, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  //arrow function
  const handleDecrease = () => {
    if (value !== minValue) {
      setValue(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value !== maxValue) {
      setValue(value + 1);
    }
  };

  return (
    <View>
      <View style={styles.counter}>
        <TouchableOpacity
          style={[styles.button, value === minValue && styles.disabledButton]}
          disabled={value === minValue}
          onPress={handleDecrease}
        >
          <FontAwesome name="minus" size={24} color="#eeeeff" />
        </TouchableOpacity>

        <Text style={styles.display}>{value}</Text>

        <TouchableOpacity
          style={[styles.button, value === maxValue && styles.disabledButton]}
          disabled={value === maxValue}
          onPress={handleIncrease}
        >
          <FontAwesome name="plus" size={24} color="#eeeeff" />
        </TouchableOpacity>
      </View>
      {/* Conditional rendering */}
      {(value === minValue || value === maxValue) && (
        <Text style={styles.error}>Reached to limit</Text>
      )}
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  button: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: "#333",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  display: {
    minWidth: 100,
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  disabledButton: {
    opacity: 0.8,
  },
  error: {
    color: "#e55",
    fontSize: 16,
  },
});
