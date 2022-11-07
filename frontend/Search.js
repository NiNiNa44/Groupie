import React from "react";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Search = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "Top" }}>
  <Text style ={{marginTop:20}}> Find people that you can tolerate </Text>
	<TextInput 
  style= {{
  backgroundColor: 'gray',
  marginTop: 20,
  width: 200,
  height:30
  }}/>
	
	</View>
);
};

export default Search;
