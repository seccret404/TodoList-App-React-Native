import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import About from "./components/About";
import Create from "./components/Create";
import Icon from "react-native-vector-icons/Ionicons"; // Import ikon dari pustaka

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#04708D", // Ganti warna latar belakang header sesuai keinginan Anda
          },
          headerTintColor: "white", // Ganti warna teks header
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{
            headerShown: true,
            headerTitle:null,
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log("Left icon pressed")}>
                <Icon name="menu-outline" size={25} color="white" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
