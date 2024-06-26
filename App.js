import { View,StatusBar,StyleSheet,Platform } from "react-native";
import Appnav from "./navigation/Appnav";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Test1 from "./screens/Test1";
import ProductInfo from "./screens/ProductInfo";
import { Provider } from "react-redux";
import store from "./store";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <NavigationContainer>
        <Appnav />
      </NavigationContainer>
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 40 : StatusBar.currentHeight,
  },
});

