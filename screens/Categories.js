import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Newcollection from '../components/NewCollection';

const Categories = ({ route }) => {
  const { categoryKey } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
        params: {
          country: 'in',
          lang: 'en',
          currentpage: '0',
          pagesize: '30',
          categories: categoryKey, 
        },
        headers: {
          'X-RapidAPI-Key': 'e982043e32mshded2985d7f3ed00p1be005jsn47d9ba0e95c0',
          'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
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
  }, [categoryKey]);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={false}>
        {products.reduce((rows, item, index) => {
          if (index % 2 === 0) {
            rows.push(
              <View style={styles.row} key={index}>
                <TouchableOpacity>
                  <Newcollection
                    image={products[index].images[0].baseUrl}
                    name={products[index].name}
                    price={products[index].price.value}
                  />
                </TouchableOpacity>
                {index + 1 < products.length && (
                  <TouchableOpacity>
                    <Newcollection
                      image={products[index + 1].images[0].baseUrl}
                      name={products[index + 1].name}
                      price={products[index + 1].price.value}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }
          return rows;
        }, [])}
      </ScrollView>
     
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
});
