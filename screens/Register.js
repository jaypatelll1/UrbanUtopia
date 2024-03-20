import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const handleLogin = () => {
    console.log("Hello")
    navigation.navigate("Login");
  };
  const handleRegister=()=>{
    const user ={
      email:email,
      password:password,
      name:fullName
    };
    axios.post("https://urbanutopia-5emc.onrender.com/register",user).then((response)=>{
      console.log(response);
      setFullName("");
      setEmail("");
      setPassword("")
    }).catch((err)=>{
      console.log(err);
    })
     
  }
  console.log("Hello");
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            marginTop: "20%",
            marginLeft: "5%",
            color: "#000000",
            fontWeight: "bold",
            fontSize: 35,
          }}
        >
          Register
        </Text>

        <View style={styles.Registerimgview}>
          <Image
            source={require("../assets/Register.png")}
            style={styles.Registerimg}
          />
        </View>

        <View style={styles.textbox}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#8C8C8C"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email id"
            placeholderTextColor="#8C8C8C"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8C8C8C"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
          <Text style={styles.bottomtext}>Already have an account ?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.bottombuttontext}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Registerimg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    height: 213,
    width: 300,
  },
  Registerimgview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    // flex:1,
    marginTop: "3%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 50,
  },
  input: {
    width: "88%",
    height: 60,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: "#E4E3E3",
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 18,
    fontWeight: "normal",
  },
  buttons: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
  },
  button: {
    backgroundColor: "#1A4AFF",
    padding: "3.7%",
    height: 60,
    width: "88%",
    margin: 12,
    marginTop: 10,
    borderRadius: 7,
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  bottomtext: {
    color: "#8C8C8C",
    fontSize: 18,
  },

  bottombuttontext: {
    color: "#1A4AFF",
    fontSize: 18,
  },
});
