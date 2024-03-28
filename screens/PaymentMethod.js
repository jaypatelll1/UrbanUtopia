import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Feather";

const PaymentMethod = ({navigation: { goBack }}) => {
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
     <Text style={{ fontSize: 25, fontWeight: "500", marginLeft: "13%" }}>
     Payment Methods
     </Text>
   </View>
 </View>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
    topv: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginBottom: 20,
        marginTop:10
      },
})