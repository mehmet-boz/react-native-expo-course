import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Ionicons from "@expo/vector-icons/Ionicons";
import SettingsStackNavigation from "./SettingsStackNavigation";

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          }
          if (route.name === "Profile") {
            iconName = "person";
          }
          if (route.name === "Settings") {
            iconName = "settings";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsStackNavigation} />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
