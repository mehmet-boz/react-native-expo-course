import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../providers/CartProvider";
import { FakestoreService } from "../../services/FakestoreService";

const SettingsScreen = () => {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log(cartItems);
  }, []);

  const CartItem = ({ productId, quantity }) => {
    const [product, setProduct] = useState();

    useEffect(() => {
      FakestoreService.getProductById(productId).then((data) => {
        setProduct(data);
      });
    }, []);

    return (
      <View style={styles.cartRow}>
        {product && (
          <>
            <Text style={styles.cell}>{product.title}</Text>
            <Text style={styles.cell}>{quantity}</Text>
            <Text style={styles.cell}>{product.price}$</Text>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.cell}>Product Name</Text>
        <Text style={styles.cell}>Quantity</Text>
        <Text style={styles.cell}>Price</Text>
      </View>
      {cartItems &&
        cartItems.map((item) => {
          return <CartItem productId={item.productId} quantity={item.count} />;
        })}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  cell: {
    width: "30%",
    textAlign: "center",
    paddingVertical: 10,
  },
  cartRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});

export default SettingsScreen;
