import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SliderBox } from "react-native-image-slider-box";
import Trendingcard from "../components/TrendingCard";
import Newcollection from "../components/NewCollection";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const images1 = [
  require("../assets/1.jpg"),
  require("../assets/2.jpg"),
  require("../assets/3.jpg"),
];
const items = [
  { id: 1, image: require("../assets/11.jpg"), text: "Men", key: "men_all" },
  {
    id: 2,
    image: require("../assets/22.jpg"),
    text: "Woman",
    key: "ladies_all",
  },
  {
    id: 3,
    image: require("../assets/33.jpg"),
    text: "Baby",
    key: "kids_newbornbaby_viewall",
  },
  { id: 4, image: require("../assets/44.jpg"), text: "Kids", key: "kids_all" },
  {
    id: 5,
    image: require("../assets/55.jpg"),
    text: "Sport",
    key: "sportswear",
  },
  { id: 6, image: require("../assets/66.jpg"), text: "Home", key: "home_all" },
];

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [Trending1, setTrending1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        params: {
          country: "in",
          lang: "en",
          currentpage: "0",
          pagesize: "16",
          categories: "home_all",
        },
        headers: {
          "X-RapidAPI-Key":
            "4c64a9a91dmsh6b5e902545fd0c2p178100jsn2167c56e0031",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setProducts(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        params: {
          country: "in",
          lang: "en",
          currentpage: "0",
          pagesize: "6",
          categories: "men_all",
          concepts: "H&M MAN",
        },
        headers: {
          "X-RapidAPI-Key":
            "4c64a9a91dmsh6b5e902545fd0c2p178100jsn2167c56e0031",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setTrending1(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topC}>
          <Image
            style={styles.topI}
            source={require("../assets/home-icon.png")}
          />
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
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate("Categories", { categoryKey: item.key })
                }
              >
                <View style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image} />
                  </View>
                  <Text>{item.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View>
          <View style={styles.mTextView}>
            <Text style={styles.mText}>Trending</Text>
            <TouchableOpacity>
              <Text style={styles.sText}> See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={Trending1}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate("Info", {
                  item: item,
                });
              }}
            >
              <Trendingcard
                image={item.images[0].baseUrl}
                name={item.name}
                price={item.price.value}
              />
            </TouchableOpacity>
          )}
        />

        <View style={styles.mTextView}>
          <Text style={styles.mText}>New Collections</Text>
        </View>
        <View style={styles.newcollection}>
          <FlatList
            data={products}
            keyExtractor={(item, index) => `${item.id}_${index}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info", {
                    item: item,
                  });
                }}
              >
                <View style={styles.itemcont}>
                  <Newcollection
                    image={item.images[0].baseUrl}
                    name={item.name}
                    price={item.price.value}
                  />
                </View>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  topC: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topI: {
    height: 32,
    width: 202,
    marginTop: 20,
    marginLeft: "4%",
  },
  topI2: {
    height: 20,
    width: 20,
    marginTop: 25,
    marginRight: "4%",
  },
  carousel: {
    borderRadius: 16,
    height: 140,
    width: "90%",
    marginLeft: "5%",
    marginTop: 10,
  },
  mTextView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "7.2%",
    paddingTop: 8,
  },
  mText: {
    fontSize: 18,
    // fontWeight: "bold",
  },
  sText: {
    fontSize: 14,
    // fontWeight: "bold",
    marginLeft: "72%",
    marginTop: 9,
  },

  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 5,
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
  newcollection: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemcont: {
    padding: 8,
  },
});
