import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigation from "./src/navigation/MainTabNavigation";
import CartProvider from "./src/providers/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MainTabNavigation />
      </NavigationContainer>
    </CartProvider>
  );
}
