import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// Bottom Tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Utils
import { DARK, LIGHT } from "./Utils/constants";

// Screens
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";
import Statistics from "./Screens/Statistics";

const Tab = createBottomTabNavigator();

const App = () => {
	const scheme = useColorScheme();

	const THEME = scheme === "dark" ? DARK : LIGHT;

	return (
		<NavigationContainer theme={THEME}>
			<StatusBar style="auto" />
			<AppNavigator />
		</NavigationContainer>
	);
};

const AppNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen name="Settings" component={Settings} />
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Statistics" component={Statistics} />
		</Tab.Navigator>
	);
};

export default App;
