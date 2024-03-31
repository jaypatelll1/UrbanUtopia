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

export default function Cart({ navigation }) {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.whitePrice.value * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  return (
    <View>
      {cart.length === 0 ? (
        <View style={styles.topC}>
          <Text style={styles.cartT}>Your shopping cart is empty</Text>
          <View style={styles.topimgv}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../assets/cart_null.png")}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <View style={styles.shopnowbtn}>
              <Text style={{ color: "#fff", fontSize: 20 }}>Shop Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      {cart?.map((item) => (
        <View style={styles.compo}>
          <CartComponent item={item} />
        </View>
      ))}

      {cart.length !== 0 ? (
        <View>
          <View style={styles.carttotal}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Cart Total</Text>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Rs. {total}
            </Text>
          </View>
          <View style={styles.addressM}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Delivery Address:
            </Text>
            <View style={styles.address}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Delivery");
                }}
              >
                <Text style={{ fontSize: 13, color: "#646464" }}>
                  Daulat Nagar, Borivali east, Mumbai-400066{" "}
                </Text>
              </TouchableOpacity>
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
      ) : (
        <></>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  topC: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  topimgv: {
    height: 334,
    width: 334,
  },
  compo: {
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartT: {
    marginTop: 40,
    marginBottom: 10,
    fontSize: 20,
  },
  carttotal: {
    margin: "5%",
    marginTop: 87,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shopnowbtn: {
    height: 57,
    width: 177,
    backgroundColor: "#724D38",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
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
