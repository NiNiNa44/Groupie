import React from "react";
import { Text, View,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import cat from "../assets/cat.jpg"
const Profile = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "orange", fontSize: 40 }}>This is you</Text>
	 <Image source={cat} style={{ width: 400, height: 300 }} />
   <Text style={{ color: "blue", fontSize: 40 }}>You are ugly</Text>
	</View>
);
};

export default Profile;
