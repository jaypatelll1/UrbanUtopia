import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from "react";
import axios from "axios";
import { TouchableOpacity } from 'react-native-gesture-handler';
const Test1 = () => {
    const [products, setProducts] = useState([]);
    const [button, setbutton] = useState([]);
    const handlePress = () => {
        setbutton(button + 1);
      };
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const options = {
    //       method: 'GET',
    //       url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
    //       params: {
    //         country: 'us',
    //         lang: 'en',
    //         currentpage: '0',
    //         pagesize: '30',
    //         categories: 'men_all',
    //         concepts: 'H&M MAN'
    //       },
    //       headers: {
    //         'X-RapidAPI-Key': 'c6d16c1501msh24e6f3310e36978p1c6398jsn1529ed171c5b',
    //         'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    //       }
  
    //     };
        
    //     try {
    //       const response = await axios.request(options);
    //       setProducts(response.data)
    //       console.log(response.data.results[0].price.value);
        
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   fetchData();
    // }, [button]);
  return (
    <View style={styles.main}>
        <Pressable onPress={handlePress}>
      <Text>Test1</Text>
      </Pressable>
  
    </View>
  )
}

export default Test1

const styles = StyleSheet.create({
main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})