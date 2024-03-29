import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const WishlistComponent = () => {
  return (
    <View>
      <View style={styles.main}>
        <View style={styles.imagv}>
          <Image
            source={require("../assets/test.png")}
            style={{ width: 120, height: 114 }}
          />
          {/* <Image source={{ uri: item.images[0].baseUrl }} style={{width:120,height:114}} /> */}
        </View>
        <View
          style={{
            height: 155,
            marginTop: 40,
          }}
        >
          <View style={styles.textv}>
            <View>
              <Text style={styles.name}>Jay</Text>
            </View>
            <View>
              <Text style={styles.price}>Rs.500</Text>
            </View>
            <View style={styles.btncont}>
              <View style={styles.atcbtn}>
                <Text style={styles.btnt}>Add to cart</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WishlistComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#F9F9F9",
    width: 332,
    height: 155,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  imagv: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 114,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
  textv: {
    width: 200,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#626262",
  },btncont:{
    marginTop:10
  },
  atcbtn: {
    height: 32,
    width: 100,
    backgroundColor: "#714E38",
    borderRadius: 8,
    justifyContent:"center",
    alignItems:"center"
  },
  btnt:{
    fontsize:14,
    fontWeight:"bold",
    color:"#fff"
  }
});
