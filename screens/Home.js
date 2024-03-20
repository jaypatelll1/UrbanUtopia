import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { SliderBox } from "react-native-image-slider-box";
const image = [
  require("../assets/1.jpg"),
  require("../assets/2.jpg"),
  require("../assets/3.jpg"),
];
export default function Home({ navigation }) {
  return (
    <View>
      <View style={styles.topC}>
        <Text style={styles.topT}>Home</Text>
      </View>
      
      <View style={styles.Container}>
        <View style={styles.searchContainer}>

          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>
      <SliderBox
        images={image}
        style={styles.carousel}
        dotColor="#476DFF"
        inactiveDotColor="#ffffff"
        autoplay={true}
        circleLoop={true}
      />
      <View style={styles.mTextView}>
        <Text style={styles.mText}>Categories</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topC: {
    backgroundColor: "#1A4AFF",
    height: 120,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
  },
  topT: {
    marginTop: 40,
    marginLeft: "8%",
    fontWeight: "bold",
    fontSize: 35,
    color: "#fff",
  },
  Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    borderWidth: 1.1,
    borderRadius: 8,
    width: "90%",
    height:43,
    marginTop: "5%",
  },
  carousel: {
    borderRadius: 16,
    height: 140,
    width: "90%",
    marginLeft: "5%",
    marginTop: 30,
  },
  mText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mTextView: {
    marginLeft: "7.2%",
    marginTop: 10,
  },
});
