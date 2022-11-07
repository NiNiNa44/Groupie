import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, useWindowDimensions } from 'react-native';
import Home from "./screens/Home";
import Map from "./screens/Map";
import Profile from "./screens/Profile";
import Search from "./screens/Search";

const TabNavigator = createBottomTabNavigator({
Home: {
	screen: Home,
	navigationOptions: {
	tabBarLabel: "Home",
	tabBarOptions: {
		activeTintColor: "#EB853A",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Ionicons
			name="md-home"
			size={24}
			color={tabInfo.focused ? "#EB853A" : "#8e8e93"}
		/>
		);
	},
	},
},
Map: {
	screen: Map,
	navigationOptions: {
	tabBarLabel: "Map",
	tabBarOptions: {
		activeTintColor: "#EB853A",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Ionicons
			name="md-map"
			size={24}
			color={tabInfo.focused ? "#EB853A" : "#8e8e93"}
		/>
		);
	},
	},
},
Search: {
	screen: Search,
	navigationOptions: {
	tabBarLabel: "Search",
	tabBarOptions: {
		activeTintColor: "#EB853A",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Ionicons
			name="md-search"
			size={24}
			color={tabInfo.focused ? "#EB853A" : "#8e8e93"}
		/>
		);
	},
	},
},
User: {
	screen: Profile,
	navigationOptions: {
	tabBarLabel: "Profile",
	tabBarOptions: {
		activeTintColor: "#EB853A",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Ionicons
			name="md-person-circle-outline"
			size={24}
			color={tabInfo.focused ? "#EB853A" : "#8e8e93"}
		/>
		);
	},
	},
},

});

const Navigator = createAppContainer(TabNavigator);

export default function App() {
return (
	<Navigator>
	<Home />
	</Navigator>
);
}
