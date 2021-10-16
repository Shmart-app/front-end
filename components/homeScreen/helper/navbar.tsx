import React from "react";
import { useFonts, Nunito_800ExtraBold } from "@expo-google-fonts/nunito";
import { StyleSheet, Text, View } from "react-native";
const Navbar = () => {
  let [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
  });

  if (fontsLoaded) {
    return (
      <View style={styles.nav_container}>
        <Text style={styles.nav_text}>Welcome Back, Zainab</Text>
      </View>
    );
  } else {
    return <Text>Loading</Text>;
  }
};

const styles = StyleSheet.create({
  nav_container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#ffffff",
    height: 74,
    paddingTop: 50,
    paddingStart: 20,
    paddingBottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  nav_text: {
    fontFamily: "Nunito_800ExtraBold",
    fontWeight: "800",
    fontSize: 24,
  },
});

export default Navbar;
