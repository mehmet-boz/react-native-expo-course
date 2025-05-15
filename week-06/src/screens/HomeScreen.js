import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [productList, setProductList] = useState();

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={fetchProducts} style={styles.fetchButton}>
        <Text>Fetch Products</Text>
      </TouchableOpacity>
      {productList &&
        productList.map((product) => {
          return <Text key={product.id}>{product.title}</Text>;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  fetchButton: {
    backgroundColor: "#eee",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
