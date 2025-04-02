import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';


// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
      /* <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Inicio" }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: "Detalles del Personaje" }} />
      </Stack.Navigator> */
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Inicio" }} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: "Detalles del Personaje" }} />
      </Drawer.Navigator>
   
  );
}
