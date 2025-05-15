import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigation from "./src/navigation/MainTabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigation />
    </NavigationContainer>
  );
}
