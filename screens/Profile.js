
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [name,setName]=useState([]);
  const [email,setEmail]=useState([]);
  const fetch=async()=>{
    const username=await AsyncStorage.getItem("name");
    const email=await AsyncStorage.getItem("email");
    setName(username);
    setEmail(email);
  }
  fetch();

  
  return (
    <View>
       <View style={styles.topC}>
        <Text style={styles.topT}>{name}</Text>
        <Text style={styles.topT}>{email}</Text>
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