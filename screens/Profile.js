import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ navigation }) {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const fetch = async () => {
    const username = await AsyncStorage.getItem("name");
    const email = await AsyncStorage.getItem("email");
    setName(username);
    setEmail(email);
  };
  fetch();
  const handelLogout = async  () => {
    await AsyncStorage.removeItem("name");
    await AsyncStorage.removeItem("email");
    await AsyncStorage.removeItem("authToken");
    navigation.navigate("Login");
  };
  return (
    <View>
      <View style={styles.infocont}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.Accountinfo}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Account information
          </Text>
          <Icon name="chevron-right" color="black" size={21} />
        </View>
      </TouchableOpacity>

      <View>
        <View style={styles.buttoncont}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Order");}}>
            <View style={styles.button}>
              <Icon
                name="box"
                color="black"
                size={30}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>My Orders</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("PaymentMethods");}}>
            <View style={styles.button}>
              <Icon1
                name="wallet"
                color="black"
                size={30}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Payment Methods</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttoncont}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Delivery");}}>
            <View style={styles.button}>
              <Icon
                name="truck"
                color="black"
                size={30}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Delivery Address</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Icon
                name="lock"
                color="black"
                size={30}
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Privacy</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line1}></View>
      <View style={styles.settingT}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Settings</Text>
      </View>
      <View>
        <View style={styles.settingButton}>
          <View style={styles.inssettingButton}>
            <Icon
              name="bell"
              color="black"
              size={21}
              style={{ marginRight: 10 }}
            />
            <Text>Notification</Text>
          </View>
          <Icon name="chevron-right" color="black" size={21} />
        </View>
        <View style={styles.line}></View>
        <View style={styles.settingButton}>
          <View style={styles.inssettingButton}>
            <Icon
              name="headphones"
              color="black"
              size={21}
              style={{ marginRight: 10 }}
            />
            <Text>Help Center</Text>
          </View>
          <Icon name="chevron-right" color="black" size={21} />
        </View>
        <View style={styles.line}></View>
        <View style={styles.settingButton}>
          <View style={styles.inssettingButton}>
            <Icon
              name="info"
              color="black"
              size={21}
              style={{ marginRight: 10 }}
            />
            <Text>About Us</Text>
          </View>
          <Icon name="chevron-right" color="black" size={21} />
        </View>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity onPress={handelLogout}>
        <View style={styles.signout}>
          <Icon
            name="log-out"
            color="black"
            size={21}
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 17, fontWeight: "500" }}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  topC: {
    backgroundColor: "#0F52BA",
    height: 120,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
  },
  infocont: {
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
  Accountinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5%",
    marginLeft: 15,
    marginRight: 10,
    marginTop: 30,
  },
  buttoncont: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginHorizontal: 5,
  },
  button: {
    width: 167,
    height: 71,
    backgroundColor: "#FFF8F1",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIcon: {
    marginLeft: 20,
    marginRight: 8,
    padding: 5,
  },
  buttonText: {
    width: 80,
    fontSize: 15,
    fontWeight: "500",
  },
  settingT: {
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 25,
  },
  line1: {
    borderWidth: 0.25,
    borderColor: "#D9D9D9",
    marginTop: 20,
  },
  line: {
    borderWidth: 0.25,
    borderColor: "#D9D9D9",
    marginTop: 5,
    marginBottom: 5,
  },
  settingButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inssettingButton: {
    flexDirection: "row",
    marginLeft: 20,
  },
  signout: {
    width: 334,
    height: 41,
    backgroundColor: "#FFF8F1",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: "3.5%",
  },
});
