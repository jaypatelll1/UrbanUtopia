import React from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
