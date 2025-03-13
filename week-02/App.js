import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Constants from "expo-constants";

export default function App() {
  const img = require("./assets/images/user.jpg");
  const webImage = { uri: "https://randomuser.me/api/portraits/women/19.jpg" };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Feather name="camera" size={24} color="#262626" />
          </View>
          <Text style={styles.logoText}>Instagram</Text>
          <View style={styles.headerRight}>
            <Feather name="airplay" size={24} color="#262626" />
            <Feather name="send" size={24} color="#262626" />
          </View>
        </View>
        <View style={styles.content}>
          <Image source={img} />
          <Image source={img} />
          <Image style={styles.image} source={webImage} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fafafa",
    alignItems: "stretch",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomColor: "#A6A6AAaa",
    borderBottomWidth: 1,
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
    columnGap: 10,
    flexBasis: 80,
    justifyContent: "flex-end",
  },
  headerLeft: {
    flexBasis: 80,
  },
  logoText: {
    fontSize: 24,
    color: "#262626",
    flex: 1,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});
