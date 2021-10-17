import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useFonts, Nunito_300Light } from "@expo-google-fonts/nunito";
import { useAlg } from "../../../context/cartContext";
const ConsumptionOverview = () => {
  const [carbs, setCarbs] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const [protien, setProtien] = useState<number>(0);
  let { cart } = useAlg();
  const data = [0.4, 0.6, 0.8];

  useEffect(() => {
    // extract all the info
    if (cart.length != 0) {
      let c = 0;
      let f = 0;
      let p = 0;
      for (let i = 0; i < cart.length; i++) {
        c +=
          cart[i]["nutrition"]["nf_total_carbohydrate"] /
          cart[i]["nutrition"]["serving_weight_grams"];
        f +=
          cart[i]["nutrition"]["nf_total_fat"] /
          cart[i]["nutrition"]["serving_weight_grams"];
        p +=
          cart[i]["nutrition"]["nf_protein"] /
          cart[i]["nutrition"]["serving_weight_grams"];
      }
      c = (100 * c) / cart.length;
      p = (100 * p) / cart.length;
      f = (100 * f) / cart.length;
      setCarbs(parseInt(c.toPrecision(4)));
      setProtien(parseInt(p.toPrecision(4)));
      setFat(parseInt(f.toPrecision(4)));
    }
  }, [cart]);
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
  });
  if (fontsLoaded) {
    return (
      <View style={styles.card_container}>
        <View style={styles.card_pieChart}>
          <PieChart
            hasLegend={false}
            data={[
              {
                name: "Carbohydrates",
                population: carbs,
                color: "rgba(131, 167, 234, 1)",
                legendFontColor: "transparent",
                legendFontSize: 0,
              },
              {
                name: "Fat",
                population: fat,
                color: "rgb(235, 91, 83)",
                legendFontColor: "transparent",
                legendFontSize: 0,
              },
              {
                name: "Protein",
                population: protien,
                color: "#A8C41A",
                legendFontColor: "#7F7F7F",
                legendFontSize: 0,
              },
              {
                name: "Other",
                population: 100 - fat - carbs - protien,
                color: "#333",
                legendFontColor: "#7F7F7F",
                legendFontSize: 0,
              },
            ]}
            width={150}
            height={150}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              decimalPlaces: 2,
              color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="35"
          />
          <View style={styles.bolded_weight}>
            <Text style={{ color: "#ffffff" }}>Healthy</Text>
          </View>
        </View>
        <View style={styles.card_pieChart}>
          <Text style={styles.head}>Nutritional Goals Met</Text>
          <View style={styles.card_row}>
            <View style={styles.card_square_blue}></View>
            <View style={styles.text}>
              <Text>Carbohydrates</Text>
              <Text>{carbs}%</Text>
            </View>
          </View>
          <View style={styles.card_row}>
            <View style={styles.card_square_red}></View>
            <View style={styles.text}>
              <Text>Fat</Text>
              <Text>{fat}%</Text>
            </View>
          </View>
          <View style={styles.card_row}>
            <View style={styles.card_square_green}></View>
            <View style={styles.text}>
              <Text>Protien</Text>
              <Text>{protien}%</Text>
            </View>
          </View>
          <View style={styles.card_row}>
            <View style={styles.card_square_grey}></View>
            <View style={styles.text}>
              <Text>Other nutrients</Text>
              <Text>{100 - fat - protien - carbs}%</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return <Text>Loading</Text>;
  }
};

const styles = StyleSheet.create({
  bolded_weight: {
    backgroundColor: "#4E9F3D",
    color: "#4E9F3D",
    fontSize: 12,
    borderRadius: 20,
    padding: 5,
    paddingStart: 15,
    paddingEnd: 15,
    width: 80,
    marginBottom: 20,
  },
  card_square_grey: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#333",
  },
  card_container: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    height: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.97,
    shadowRadius: 4.65,

    elevation: 9,
  },
  head: {
    fontFamily: "Nunito_300Light",
    fontWeight: "700",
    color: "#5D5B77",
  },
  card_pieChart: {
    width: 170,
  },
  card_row: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card_square_red: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#EB5B53",
  },
  card_square_blue: {
    borderRadius: 50,
    width: 20,
    height: 20,
    backgroundColor: "#4278A6",
  },
  card_square_green: {
    borderRadius: 50,
    width: 20,
    height: 20,
    backgroundColor: "#A8C41A",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 130,
    fontSize: 13,
    fontFamily: "Nunito_300Light",
  },
});
export default ConsumptionOverview;
