import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import CartComponent from "../components/CartComponent";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.whitePrice.value * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  return (
    <View>
      <Text style={styles.topT}>Cart</Text>
        {cart.length===0?<View style={{alignItems:"center"}}><Image style={{width:"50%",height:"50%"}} source={require("../assets/cart_null.png")}/></View>:<></>}
        {cart?.map((item) => (
          <View style={styles.compo}>
          <CartComponent
            item={item}
          />
           </View>
        ))}
     

      <View>
        <View style={styles.carttotal}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Cart Total</Text>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Rs. {total}</Text>
        </View>
        <View style={styles.addressM}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Delivery Address:
          </Text>
          <View style={styles.address}>
            <Text style={{ fontSize: 13, color: "#646464" }}>
              Daulat Nagar, Borivali east, Mumbai-400066{" "}
            </Text>
          </View>
        </View>
        <View style={styles.checkoutbtn}>
          <TouchableOpacity
            style={{
              width: 338,
              height: 47,
              backgroundColor: "#6D5038",
              marginTop: "3%",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image source={require("../assets/cart.png")} />
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
                marginLeft: "5%",
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
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
  },
  compo: {
    margin: 10,
    justifyContent: "space-between",
    alignItems:"center"
  },
  topT: {
    marginTop: 40,
    marginLeft: "8%",
    fontWeight: "bold",
    fontSize: 35,
    color: "#fff",
  },
  carttotal: {
    margin: "5%",
    marginTop: 87,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addressM: {
    margin: "5%",
    marginTop: -4 - 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  address: {
    height: 40,
    width: 130,
    marginTop: 6,
  },
  checkoutbtn: {
    alignItems: "center",
  },
});
