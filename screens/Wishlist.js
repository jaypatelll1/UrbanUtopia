import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import WishlistComponent from "../components/WishlistComponent";

export default function Wishlist() {
  return (
    <View>
    <View>
      <View>
      <Image
            style={styles.topI}
            source={require("../assets/home-icon.png")}
          />
      </View>
      <View >
        <Text style={styles.topT}>Fashion list</Text>
      </View>
    </View>
    <View style={styles.compo}>
      <WishlistComponent/>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  topI:{ height: 32,
    width: 202,
    marginTop: 20,
    marginLeft: "4%"},
  topT: {
    marginTop: 20,
    marginLeft: "8%",
    fontWeight: "bold",
    fontSize: 22,
    
  },compo: {
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
