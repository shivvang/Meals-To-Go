import { StatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider, Text } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import SafeArea_View from "./src/components/utility/safe-area.component";
//vector icon
import Ionicons from "@expo/vector-icons/Ionicons";

//navigation import
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//navigation stuff
const Tab = createBottomTabNavigator();

//context provider import
import { RestaurantsContextprovider } from "./src/Services/Restaurants/restaurants.context";

const Tab_Icon = {
  Restaurants: "md-restaurant",
  Maps: "md-map",
  Settings: "settings",
};

const Settings = () => (
  <SafeArea_View>
    <Text>Settings</Text>
  </SafeArea_View>
);
const Map = () => (
  <SafeArea_View>
    <Text>Map</Text>
  </SafeArea_View>
);

const CreatescreenOptions = ({ route }) => {
  const iconName = Tab_Icon[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextprovider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={CreatescreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Maps" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextprovider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
