
import React from 'react'
import { View, Text, StyleSheet, } from "react-native";

export default function Wishlist() {
  return (
    <View>
       <View style={styles.topC}>
        <Text style={styles.topT}>Wishlist</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    topC: {
      backgroundColor: "#0F52BA",
      height: 120,
      borderBottomLeftRadius: 48,
      borderBottomRightRadius: 48,
    },
    topT: {
      marginTop: 40,
      marginLeft: "8%",
      fontWeight: "bold",
      fontSize: 35,
      color: "#fff",
    },})