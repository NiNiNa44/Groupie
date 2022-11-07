import React from "react";
import { Text, View, Image } from "react-native";
import uf from "../assets/uf.png";
const Map = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ fontSize: 40 }}>Where are we dropping boys?</Text>
	<Image source={uf} style={{ width: 400, height: 300 }} />
	</View>
);
};

export default Map;
