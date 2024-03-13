import { View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Appstack from "./Appstack";
import Authstack from "./Authstack";
import Register from "../screens/Register";

export default function Appnav() {
  return (
    <View>
      <NavigationContainer>
        <Authstack />
      </NavigationContainer>
    </View>
  );
}
