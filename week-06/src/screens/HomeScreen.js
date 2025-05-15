import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import ProductCard from "../components/ProductCard";
import { FakestoreService } from "../services";

const HomeScreen = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    FakestoreService.getProducts().then((data) => {
      setProductList(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.productsWrapper}
        showsVerticalScrollIndicator={false}
      >
        {productList &&
          productList.map((product) => {
            return <ProductCard key={product.id} productData={product} />;
          })}
      </ScrollView>
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
  productsWrapper: {
    display: "flex",
    rowGap: 10,
    flexDirection: "column",
    flexWrap: 1,
  },
  scroll: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    flexWrap: 1,
  },
});

export default HomeScreen;
