import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const BottomBar = () => {
  return (
    <View style={styles.bottom_bar}>
      <Image source={require("../../../assets/camera_u.png")} />
      <Image source={require("../../../assets/home_s.png")} />
      <Image source={require("../../../assets/group_u.png")} />
      <Image source={require("../../../assets/settings_u.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottom_bar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 30,
    position: "absolute",
    height: 80,
    bottom: 0,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.97,
    shadowRadius: 4.65,

    elevation: 29,
    borderRadius: 15,
  },
});

export default BottomBar;
