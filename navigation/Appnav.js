import React from "react";
import { Image } from "react-native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Wishlist from "../screens/Wishlist";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Cart from "../screens/Cart";
import Categories from "../screens/Categories";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({  size }) => {
          let iconImage;

          if (route.name === "Home") {
            iconImage = require("../assets/home_active.png");
          } else if (route.name === "Wishlist") {
            iconImage = require("../assets/wishlist_active.png");
          } else if (route.name === "Profile") {
            iconImage = require("../assets/profile_active.png");
          } else if (route.name === "Cart") {
            iconImage = require("../assets/cart_active.png");
          }

          return <Image source={iconImage} style={{ width: size, height: size }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false,tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: false, tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false,tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false,tabBarLabel: "", }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function Appnav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}
