import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <View style={styles.menuWrapper}>
      <MenuItem icon="home-outline" title="Home" active />
      <MenuItem icon="camera-outline" title="Gallery" />
      <MenuItem icon="apps-outline" title="Projects" />
      <MenuItem icon="information-circle-outline" title="About" />
      <MenuItem icon="mail-outline" title="Contact" />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuWrapper: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#334455",
    padding: 10,
    borderRadius: 20,
    rowGap: 10,
  },
});
