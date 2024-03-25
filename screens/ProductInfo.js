import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
const ProductInfo = ({route }) => {
  const { item } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizePress = (size) => {
    setSelectedSize(size);
  };
  console.log(item);

  return (
    <ScrollView style={{ marginTop: 45, flex: 1 }} horizontal={false}>
      <View style={styles.topIconView}>
        <View style={styles.iconView}>
          <Image source={require("../assets/back.png")} style={styles.icon} />
        </View>
        <View style={styles.iconView}>
          <Image
            source={require("../assets/wishlist_active.png")}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "rgba(238,230,219,0.8)" }}>
        <View style={styles.prodImgView}>
          <Image source={{ uri: item.images[0].baseUrl }} style={styles.prodImg} />
          
        </View>
        <View style={styles.prodDetails}>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "8%",
                marginTop: "6%",
              }}
            >
              <Text
                style={{ color: "#9B9B9B", fontSize: 15, fontWeight: "bold" }}
              >
                {item.categoryName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginRight: 15,
                }}
              >
                <Image
                  source={require("../assets/star.png")}
                  style={{ width: 20, height: 20 }}
                />
                <Text
                  style={{
                    color: "#9B9B9B",
                    fontSize: 15,
                    marginRight: "8%",
                    fontWeight: "bold",
                  }}
                >
                  4.5
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  marginLeft: "8%",
                  fontWeight: "800",
                  marginTop: "3%",
                }}
              >
                {item.name}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: "8%",
                  fontWeight: "600",
                  marginTop: "3%",
                }}
              >
                Product Details
              </Text>
              <Text
                style={{ fontSize: 14, marginLeft: "8%", marginRight: "4%" }}
              >
                {item.description}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginTop: "3%" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "600", marginLeft: "8%" }}
              >
                Color:
              </Text>
              <Text style={{ fontSize: 18 }}>{item.defaultArticle.color.text}</Text>
            </View>
            <View style={{ marginTop: "3%" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "600", marginLeft: "8%" }}
              >
                Select Size
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "space-evenly",
                  marginLeft: "3%",
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.sizes,
                    selectedSize === "XS" && styles.selected,
                  ]}
                  onPress={() => handleSizePress("XS")}
                >
                  <Text style={styles.sizeText}>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sizes,
                    selectedSize === "S" && styles.selected,
                  ]}
                  onPress={() => handleSizePress("S")}
                >
                  <Text style={styles.sizeText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sizes,
                    selectedSize === "M" && styles.selected,
                  ]}
                  onPress={() => handleSizePress("M")}
                >
                  <Text style={styles.sizeText}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sizes,
                    selectedSize === "L" && styles.selected,
                  ]}
                  onPress={() => handleSizePress("L")}
                >
                  <Text style={styles.sizeText}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sizes,
                    selectedSize === "XL" && styles.selected,
                  ]}
                  onPress={() => handleSizePress("XL")}
                >
                  <Text style={styles.sizeText}>XL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sizes,
                    selectedSize === "XXL" && styles.selected,
                  ]}
                  onPress={() => handleSizePress("XXL")}
                >
                  <Text style={styles.sizeText}>XXL</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: "4%",
                  borderTopColor:"rgba(200,200,211,0.2)",
                  borderTopWidth:2,
                  flex:1,
                  flexDirection:"row",
                  justifyContent:"space-around"
                }}
              >
                <View style={{marginTop:"2%"}}>
                  <Text
                    style={{
                      color: "#9B9B9B",
                      fontSize: 16,
                      marginLeft: "8%",
                      fontWeight: "900",
                    }}
                  >
                    Total Price
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      marginLeft: "8%",
                      fontWeight: "900",
                    }}
                  >
                   {item.whitePrice.value}
                  </Text>
                </View>
                <TouchableOpacity style={{width:170,height:50,backgroundColor:"#714E38",marginTop:"3%",borderRadius:40,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                  <Image source={require("../assets/cart.png")}/>
                  <Text style={{color:"#fff",fontSize:18,fontWeight:"600",marginLeft:"5%"}}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    margin: 10,
  },
  iconView: {
    margin: 15,
    marginBottom: 0,
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  topIconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(238,230,219,0.8)",
  },
  prodImg: {
    width: 355,
    marginRight: 150,
    height: 400,
    marginTop: 10,
  },
  prodImgView: {
    height: 350,
    flex: 1,
    justifyContent: "center",
  },
  prodDetails: {
    width: "100%",
    height: "70%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  sizes: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "600",
  },
  selected: {
    backgroundColor: "#694A36",
  },
});
