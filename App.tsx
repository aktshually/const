import { NavigationContainer } from "@react-navigation/native";
import Tabs from "components/tabs";
import { useFonts } from "expo-font";

const App = () => {
	const [fontsLoaded] = useFonts({
		"poppins-semibold": require("./assets/fonts/poppins-semibold.ttf"),
		"urbanist-regular": require("./assets/fonts/urbanist-regular.ttf"),
	});

	if (!fontsLoaded) return null;
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

export default App;
