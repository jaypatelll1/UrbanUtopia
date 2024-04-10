import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const Notification = ({ navigation: { goBack } }) => {
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
        <Text style={{ fontSize: 25, fontWeight: "500", marginLeft: "26%" }}>
          Notification
        </Text>
      </View>
      <View style={styles.compo}>
        <Image source={require("../assets/Notification.png")} />
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Oops! This place looks empty!
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "400",textAlign:"center" }}>
          Looks like we done have any notification Do visit back later
        </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  topv: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  compo: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
});
