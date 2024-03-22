import {  View } from 'react-native';
import Appnav from "./navigation/Appnav";
import Register from "./screens/Register"
import Profile from './screens/Profile';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Test1 from './screens/Test1';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
export default function App() {
  return (
    <NavigationContainer >
      <Appnav/>
      {/* <Test1/> */}
    </NavigationContainer>
  );
}



