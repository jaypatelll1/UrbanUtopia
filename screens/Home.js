import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "deprecated-react-native-prop-types";
import React from "react";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { SliderBox } from "react-native-image-slider-box";
const images1 = [
  require("../assets/1.jpg"),
  require("../assets/2.jpg"),
  require("../assets/3.jpg"),
];
const items = [
  { id: 1, image: require("../assets/11.jpg"), text: "Top" },
  { id: 2, image: require("../assets/22.jpg"), text: "Jeans" },
  { id: 3, image: require("../assets/33.jpg"), text: "Shoes" },
  { id: 4, image: require("../assets/44.jpg"), text: "Jacket" },
  { id: 5, image: require("../assets/55.jpg"), text: "Cap" },
];
export default function Home({ navigation }) {
  return (
    <View>
      <View style={styles.topC}>
        <Text style={styles.topT}>Home</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Container}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>
      <SliderBox
        images={images1}
        style={styles.carousel}
        dotColor="#476DFF"
        inactiveDotColor="#ffffff"
        autoplay={true}
        circleLoop={true}
      />
      <View style={styles.mTextView}>
        <Text style={styles.mText}>Categories</Text>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {items.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <Text>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      </ScrollView>
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
    height: 43,
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

  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  itemContainer: {
    alignItems: "center",
    marginLeft: 20,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50, // Make it a circle
  },
  imageContainer: {
    borderRadius: 50, // Make it a circle
    overflow: "hidden",
    elevation: 5, // Shadow on Android
    shadowColor: "black", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  },
});
