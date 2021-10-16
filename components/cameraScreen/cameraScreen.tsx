import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BottomBar from "../homeScreen/helper/bottomBar";
import { cartContext, product } from "../../context/cartContext";
//Code from official expo documentation:
// https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(true);
  const [inCart, setCartCounter] = useState<number>(0);
  const [cart, setCart] = useState<product[]>([]);

  const setCartWrapper = (arg: product[]) => {
    setCart(arg);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const capture = () => {
    setCartCounter(inCart + 1);
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    // Get all the data from the python api
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
      }}
    >
      <View style={styles.container}>
        {!scanned && (
          <Image
            style={styles.image}
            source={require("../../assets/scanner.png")}
          />
        )}

        <Image
          style={styles.cancel}
          source={require("../../assets/cancel.png")}
        />
        <TouchableOpacity
          onPress={() => {
            alert("ds");
          }}
        >
          <Image
            style={styles.add}
            source={require("../../assets/add_to_cart.png")}
          />
        </TouchableOpacity>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.pop_up}>
          <View style={{ backgroundColor: "#ffffff" }}></View>

          <TouchableOpacity
            style={styles.capture}
            onPressIn={() => {
              setScanned(false);
            }}
            onPressOut={() => {
              setScanned(true);
            }}
          />

          <View style={styles.cart}>
            <Text style={styles.cart_text}>{inCart}</Text>
          </View>
        </View>
      </View>
    </cartContext.Provider>
  );
};
const styles = StyleSheet.create({
  cart: {
    borderRadius: 50,
    backgroundColor: "#EB5B53",
    padding: 10,
  },
  cart_text: {
    color: "#ffffff",
  },
  cancel: {
    width: 20,
    height: 20,
    top: 30,
    left: 40,
    position: "absolute",
  },
  add: {
    width: 20,
    height: 20,
    top: 30,
    right: 40,
    position: "absolute",
  },
  capture: {
    height: 70,
    width: 70,
    top: 5,
    borderRadius: 50,
    zIndex: 1200,
    backgroundColor: "#FFC0B8",
  },
  pop_up: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f9f9f9",
    height: 120,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.97,
    shadowRadius: 465,

    elevation: 290,
    borderRadius: 15,
    zIndex: 100,
  },
  container: {
    height: "100%",
    backgroundColor: "#000",
  },
  image: {
    width: 250,
    position: "absolute",
    top: 300,
    left: 80,
    height: 250,
    zIndex: 100000,
  },
});
export default CameraScreen;
