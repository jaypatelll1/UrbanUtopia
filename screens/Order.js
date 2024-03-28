import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import OrderComponent from "../components/OrderComponent";
import Icon from "react-native-vector-icons/Feather";

const Order = ({navigation: { goBack }}) => {
  return (
    <View>
      <View style={styles.topv}>
        <TouchableOpacity onPress={()=>goBack()}>
          <Icon
            name="arrow-left"
            color="black"
            size={25}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "500", marginLeft: "28%" }}>
          My Orders
        </Text>
      </View>
      <View style={styles.compo}>
        <OrderComponent />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  topv: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 20,
    marginTop:10
  },
  compo: {
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
