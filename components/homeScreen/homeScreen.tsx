import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./helper/navbar";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import ConsumptionOverview from "./helper/consumptionOverview";
import ProductCard from "./helper/productCard";
import { productInterface } from "../../TS helper files/productInterface";
import BottomBar from "./helper/bottomBar";
const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });
  let cart: productInterface[] = [
    {
      name: "Apple",
      imgUrl: "https://nix-tag-images.s3.amazonaws.com/140_highres.jpg",
      weightLb: 1,
      price: 4.99,
    },
    {
      name: "Almonds",
      imgUrl: "https://nix-tag-images.s3.amazonaws.com/140_highres.jpg",
      weightLb: 1,
      price: 4.98,
    },
    {
      name: "Orange",
      imgUrl: "https://nix-tag-images.s3.amazonaws.com/140_highres.jpg",
      weightLb: 1,
      price: 5.1,
    },
  ];
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
            return (
              <ProductCard
                name={cartEntry.name}
                imgUrl={cartEntry.imgUrl}
                price={cartEntry.price}
                weightLb={cartEntry.weightLb}
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
