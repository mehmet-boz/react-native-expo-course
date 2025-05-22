import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ productData }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Product", { productId: productData.id })
      }
      style={styles.wrapper}
    >
      <Image style={styles.image} source={{ uri: productData.image }} />
      <Text style={styles.title}>{productData.title}</Text>
      <Text style={styles.price}>{productData.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  price: {
    backgroundColor: "#11f",
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#fff",
    alignSelf: "flex-start",
  },
  wrapper: {
    width: "100%",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    padding: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  title: {
    fontSize: 18,
  },
});
