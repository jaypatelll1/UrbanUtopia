import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Newcollection = ({ image, name, price }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default Newcollection;

const styles = StyleSheet.create({
  container: {
    width: 159,
    height: 274,
    borderRadius: 8,
    margin: 8,
  },
  image: {
    width: 159,
    height: 222,
    borderRadius: 8,
    marginBottom: 8,
    // borderWidth: 1.5,
    borderColor: "#000",
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 0,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
  },
});
