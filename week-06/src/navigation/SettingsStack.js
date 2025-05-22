import { createStackNavigator } from "@react-navigation/stack";
import PrivacyScreen from "../screens/settings/PrivacyScreen";
import ContentSettingsScreen from "../screens/settings/ContentSettingsScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";

const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={SettingsScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="Content" component={ContentSettingsScreen} />
    </Stack.Navigator>
  );
}

export default SettingsStack;
