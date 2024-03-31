import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import WishlistComponent from "../components/WishlistComponent";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <View>
      <View>
        <View>
          <Image
            style={styles.topI}
            source={require("../assets/home-icon.png")}
          />
        </View>
        <View>
          <Text style={styles.topT}>Fashion list</Text>
        </View>
      </View>
      <View style={styles.compo}>
        {wishlist?.map((item) => (
          <View style={styles.compo}>
            <WishlistComponent item={item}/>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topI: { height: 32, width: 202, marginTop: 20, marginLeft: "4%" },
  topT: {
    marginTop: 20,
    marginLeft: "8%",
    fontWeight: "bold",
    fontSize: 22,
  },
  compo: {
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
