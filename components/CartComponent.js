import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/CartReducer";

export const CartComponent = ({ item }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const dec = (item) => {
    dispatch(decrementQuantity(item));
  };
  const inc = (item) => {
    dispatch(incrementQuantity(item));
  };
  return (
    <View style={styles.main}>
      <View style={styles.imagv}>
        <Image
          source={{ uri: item.images[0].baseUrl }}
          style={{ width: 80, height: 102 }}
        />
      </View>
      <View style={{}}>
        <View style={styles.textv}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View>
            <Text style={styles.price}>
              {item.whitePrice.value * item.quantity}
            </Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => dec(item)}>
              <View style={styles.buttonL}>
                <Text style={{ color: "#fff" }}>–</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.number}>
              <Text>{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => inc(item)}>
              <View style={styles.buttonR}>
                <Text style={{ color: "#fff" }}>+</Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={() => removeItemFromCart(item)}>
                <View style={styles.removebtn}>
                  <Text>Remove</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F9F9F9",
    width: 332,
    height: 115,
    borderRadius: 8,
    flexDirection: "row",
  },
  imagv: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  textv: {
    width: 200,
    marginTop: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#626262",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 9,
  },
  buttonL: {
    height: 25,
    width: 25,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  number: {
    height: 23,
    width: 28,
    alignItems: "center",
  },
  buttonR: {
    height: 25,
    width: 25,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  removebtn: {
    height: 26,
    width: 71,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20%",
    backgroundColor: "#fff8f1",
  },
});
