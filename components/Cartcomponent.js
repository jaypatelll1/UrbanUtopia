import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Cartcomponent = () => {
  return (
    <View>
      <View style={styles.main}>
        <View style={styles.imagv}>
          <Image source={require("../assets/test.png")} />
        </View>
        <View style={{}}>
          <View style={styles.textv}>
            <View>
              <Text style={styles.name}>Regular Fit Lace Resort Shirt</Text>
            </View>
            <View>
              <Text style={styles.price}>Rs.2500</Text>
            </View>

            <View style={styles.buttons}>
              <View style={styles.buttonL}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff" }}>–</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.number}>
                <Text>1</Text>
              </View>
              <View style={styles.buttonR}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff" }}>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <View style={styles.removebtn}>
                    <Text>Remove</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cartcomponent;

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
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  textv: {
    width: 200,
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
    height: 18,
    width: 18,
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
    height: 18,
    width: 18,
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
    marginLeft:"20%",
    backgroundColor:"#fff8f1"
  },
});
