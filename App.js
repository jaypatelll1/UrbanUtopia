import {  View } from 'react-native';
import Appnav from "./navigation/Appnav";
import Register from "./screens/Register"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer >
      <Appnav/>
    </NavigationContainer>
  );
}


