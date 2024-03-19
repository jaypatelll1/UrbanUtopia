import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authstack from "./Authstack";
import Appstack from "./Appstack";

const Stack = createNativeStackNavigator();
export default function Appnav() {
  return (
    
        <Authstack/>
    
  );
}


