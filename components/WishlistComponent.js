import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React from "react";
import { addToCart } from "../redux/CartReducer";
import { useDispatch, useSelector } from "react-redux";

const WishlistComponent = ({item}) => {
  cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View>
      <View style={styles.main}>
        <View style={styles.imagv}>
          <Image
            source={{ uri: item.images[0].baseUrl }}
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
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.price}>{item.whitePrice.value}</Text>
            </View>
            <TouchableOpacity style={styles.btncont} onPress={()=>   dispatch(addToCart(item))}>
              <View style={styles.atcbtn}>
                <Text style={styles.btnt}>Add to cart</Text>
              </View>
            </TouchableOpacity>
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
