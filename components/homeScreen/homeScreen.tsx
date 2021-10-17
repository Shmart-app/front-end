import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./helper/navbar";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import ConsumptionOverview from "./helper/consumptionOverview";
import ProductCard from "./helper/productCard";
import { productInterface } from "../../TS helper files/productInterface";
import BottomBar from "./helper/bottomBar";
import { useAlg } from "../../context/cartContext";
const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });
  let { cart, setCartWrapper } = useAlg();

  useEffect(() => {
    console.log("**************" + cart);
  }, [cart]);
  if (fontsLoaded) {
    return (
      <View style={styles.back}>
        <Navbar />
        <Text style={styles.heading}>Goals</Text>
        <ConsumptionOverview />
        <Text style={styles.heading}>Your Cart</Text>
        <ScrollView
          contentContainerStyle={styles.product_row}
          scrollEnabled={true}
          horizontal={true}
        >
          {cart.map((cartEntry, i) => {
            console.log(
              JSON.stringify(cartEntry["nutrition"]["photo"]["highres"])
            );
            return (
              <ProductCard
                name={cartEntry.name}
                imgUrl={cartEntry["nutrition"]["photo"]["highres"]}
                price={parseFloat((Math.random() * 5).toPrecision(3))}
                weightLb={parseFloat((Math.random() * 2).toPrecision(2))}
                key={i}
              />
            );
          })}
        </ScrollView>
        <BottomBar />
      </View>
    );
  } else {
    return <Text>Loading</Text>;
  }
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#fafafa",
    height: "100%",
  },
  heading: {
    paddingStart: 30,
    paddingTop: 10,
    color: "#2F2E41",
    fontFamily: "Nunito_600SemiBold",
    fontSize: 22,
  },
  product_row: {
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
  },
});

export default HomeScreen;
