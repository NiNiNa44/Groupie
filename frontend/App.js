import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import cat from './assets/cat.jpg';

const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <View style={styles.container}>
        <Text style={{ color: '#145', fontSize: 20 }}>I hate white people</Text>
        <TouchableOpacity 
        onPress={()=>style={backgroundColor: '#000'}}>
          <Image source={cat} style={{ width: 400, height: 300 }} />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    //s
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
