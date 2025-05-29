import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FakestoreService } from "../services";
import { CartContext } from "../providers/CartProvider";

const ProductScreen = () => {
  const { params } = useRoute();
  const [product, setProduct] = useState();
  const { addToCart } = useContext(CartContext);

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
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {
              addToCart(product.id);
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
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
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  cartButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f33",
    marginVertical: 10,
  },
});
