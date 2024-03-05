import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Me } from "screens/me";
import { Measures } from "screens/measures";
import { Workouts } from "screens/workouts";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen name="Me" component={Me} />
			<Tab.Screen name="Workouts" component={Workouts} />
			<Tab.Screen name="Measures" component={Measures} />
		</Tab.Navigator>
	);
};

export default Tabs;
