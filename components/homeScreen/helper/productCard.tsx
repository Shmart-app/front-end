import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  useFonts,
  Nunito_300Light,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";

import { productInterface } from "../../../TS helper files/productInterface";

const ProductCard = (props: productInterface) => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_300Light,
  });
  if (fontsLoaded) {
    return (
      <View style={styles.product}>
        <View>
          <Image style={styles.image_view} source={{ uri: props.imgUrl! }} />
        </View>
        <View>
          <Text style={styles.text}>{props.name}</Text>
          <View style={styles.price_row}>
            <View style={styles.bolded_weight}>
              <Text style={{ color: "#ffffff", fontFamily: "Nunito_300Light" }}>
                {props.weightLb}Lb, Price
              </Text>
            </View>
            <Text style={styles.price}>$ {props.price}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return <Text>Loading</Text>;
  }
};

const styles = StyleSheet.create({
  price_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingStart: 15,
    paddingEnd: 15,
  },
  bolded_weight: {
    backgroundColor: "#383749",
    color: "#ffffff",
    fontSize: 12,
    borderRadius: 20,
    padding: 5,
    paddingStart: 15,
    paddingEnd: 15,
  },
  price: {
    fontFamily: "Nunito_300Light",
  },
  product: {
    margin: 30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: 200,
    height: 300,
    backgroundColor: "#ffffff",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.97,
    shadowRadius: 4.65,

    elevation: 19,
    borderRadius: 15,
  },
  image_view: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    color: "#263238",
    fontFamily: "Nunito_600SemiBold",
    fontSize: 17,
    padding: 15,
  },
});
export default ProductCard;
