import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const fetch = async () => {
    const username = await AsyncStorage.getItem("name");
    const email = await AsyncStorage.getItem("email");
    setName(username);
    setEmail(email);
  };
  fetch();

  return (
    <View>
      <View style={styles.infocont}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topC: {
    backgroundColor: "#0F52BA",
    height: 120,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
  },infocont:{
    marginTop: 40,
    marginLeft: "20%",
  },
  name: {
  
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },
  email: {

    fontSize: 12,
    color: "#8B8B8B",
  },
});
