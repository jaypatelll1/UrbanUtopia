import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const Delivery = ({ navigation: { goBack } }) => {
  return (
    <View>
      <View style={styles.topv}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon
            name="arrow-left"
            color="black"
            size={25}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "500", marginLeft: "28%" }}>
          Delivery
        </Text>
      </View>
      <View>
        <Text style={styles.editText}>Edit Address</Text>
        
        <View style={styles.inpView}>
          <Text style={styles.txts}>Name*</Text>
          <TextInput keyboardType="ascii-capable" style={styles.inp} />
        </View>
        <View style={styles.inpView}>
          <Text style={styles.txts}>Mobile*</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.inp}
            maxLength={10}
          />
        </View>
        <View
          style={{
            marginTop: "11%",
            borderBottomColor: "black",
            borderBottomWidth: 1.2,
          }}
        />
        <View
          style={[
            styles.inpView,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <View style={{ width: "40%", marginRight: "6%" }}>
            <Text style={styles.txts}>Pincode*</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.inp}
              maxLength={6}
            />
          </View>
          <View style={{ width: "40%", marginLeft: "5%" }}>
            <Text style={styles.txts}>City*</Text>
            <TextInput keyboardType="ascii-capable" style={styles.inp} />
          </View>
        </View>
        <View style={styles.inpView}>
          <Text style={styles.txts}>Address*(House No, Building, Street)</Text>
          <TextInput keyboardType="ascii-capable" style={styles.inp} />
        </View>
      </View>
      
      <View style={{alignItems:"center",marginTop:"7.5%",height:"100%"}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "white",fontSize:18 }}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  topv: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  editText: {
    fontSize: 24,
    fontWeight: "600",
    margin: "5%",
  },
  txts: {
    color: "#7F7F7F",
  },
  inpView: {
    marginHorizontal: "8%",
    marginTop: "5%",
  },
  inp: {
    borderBottomColor: "#7F7F7F",
    borderBottomWidth: 1,
    fontSize: 14,
  },
  btn: {
    width: "85%",
    height: "4.5%",
    backgroundColor: "black",
    borderRadius: 12,
    justifyContent:"center",
    alignItems:"center"
  },
});
