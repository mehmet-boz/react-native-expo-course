import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsStack from "./SettingsStack";
import HomeStack from "./HomeStack";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  const { cartItems } = useContext(CartContext);
  const cartBadge = cartItems.length;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          }
          if (route.name === "Categories") {
            iconName = "grid";
          }
          if (route.name === "Cart") {
            iconName = "cart";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#11f",
        tabBarInactiveTintColor: "#333",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={ProfileScreen} />
      <Tab.Screen
        name="Cart"
        component={SettingsStack}
        options={{ tabBarBadge: cartBadge }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
