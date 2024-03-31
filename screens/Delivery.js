import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Delivery = ({ navigation: { goBack } }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [add, setAdd] = useState("");
  const [street, setStreet] = useState("");
  const cart=useSelector((state) => state.cart.cart);
  const country="India";
 
  const  submit = async() => {
    let i = add.indexOf(",");
    setHouseNo(add.slice(0, i));
    setStreet(add.slice(i + 1).trim());
    const userId=await AsyncStorage.getItem("userId");
    console.log(userId);
    const address={
      name,
      mobile,
      houseNo,
      street,
      city,
      country,
      postalCode:pinCode
    }
  
    axios.post("https://urbanutopia-5emc.onrender.com/addresses",{userId,address}).then((res)=>{
      console.log("Address Saved Successfully")
    }).catch((err)=>{
      console.log(err);
    })
    goBack()
  };

  return (
    <View>
      <View style={styles.topv}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon
            name="arrow-left"
            color="black"
            size={25}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "500", marginLeft: "28%" }}>
          Delivery
        </Text>
      </View>
      <View>
        <Text style={styles.editText}>Edit Address</Text>

        <View style={styles.inpView}>
          <Text style={styles.txts}>Name*</Text>
          <TextInput
            keyboardType="ascii-capable"
            style={styles.inp}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inpView}>
          <Text style={styles.txts}>Mobile*</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.inp}
            maxLength={10}
            onChangeText={setMobile}
          />
        </View>

        <View
          style={[
            styles.inpView,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <View style={{ width: "40%", marginRight: "6%" }}>
            <Text style={styles.txts}>Pincode*</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.inp}
              maxLength={6}
              onChangeText={setPinCode}
            />
          </View>
          <View style={{ width: "40%", marginLeft: "5%" }}>
            <Text style={styles.txts}>City*</Text>
            <TextInput
              keyboardType="ascii-capable"
              style={styles.inp}
              onChangeText={setCity}
            />
          </View>
        </View>
        <View style={styles.inpView}>
          <Text style={styles.txts}>Address*(House No, Building, Street)</Text>
          <TextInput
            keyboardType="ascii-capable"
            style={styles.inp}
            onChangeText={setAdd}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: "7.5%", height: "100%" }}>
        
          <TouchableOpacity style={styles.btn} onPress={submit}>
            <Text style={{ color: "white", fontSize: 18 }}>Save Address</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  topv: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  editText: {
    fontSize: 24,
    fontWeight: "600",
    margin: "5%",
  },
  txts: {
    color: "#7F7F7F",
  },
  inpView: {
    marginHorizontal: "8%",
    marginTop: "5%",
  },
  inp: {
    borderBottomColor: "#7F7F7F",
    borderBottomWidth: 1,
    fontSize: 14,
  },
  btn: {
    width: "85%",
    height: "4.5%",
    backgroundColor: "black",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
