import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import Cuestionario from "../screens/Cuestionario";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MS-CoV19" component={HomeScreen} />
        <Stack.Screen name="Test Triage" component={Cuestionario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
