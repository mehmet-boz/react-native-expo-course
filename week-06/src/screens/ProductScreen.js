import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FakestoreService } from "../services";

const ProductScreen = () => {
  const { params } = useRoute();
  const [product, setProduct] = useState();

  useEffect(() => {
    FakestoreService.getProductById(params.productId).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      {product ? (
        <>
          <Image style={styles.image} source={{ uri: product.image }} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text>{product.category}</Text>
          <Text>{product.description}</Text>
        </>
      ) : (
        <ActivityIndicator color="#f55" size="large" />
      )}
    </View>
  );
};

export default ProductScreen;

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
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  title: {
    fontSize: 18,
  },
});
