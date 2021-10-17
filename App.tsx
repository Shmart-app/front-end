import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/homeScreen/homeScreen";
import Appstyles from "./scss/main.scss";
import { NavigationContainer } from "@react-navigation/native";
import CameraScreen from "./components/cameraScreen/cameraScreen";
import PagerView from "react-native-pager-view";
import BottomBar from "./components/homeScreen/helper/bottomBar";
import { cartContext } from "./context/cartContext";
import HomeScreen2 from "./components/homeScreen/homeScreen copy";
export default function App() {
  const [cart, setCart] = useState<any>([]);
  const setCartWrapper = (arg) => {
    setCart(arg);
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        setCartWrapper,
      }}
    >
      <PagerView scrollEnabled={true} style={styles.pagerView} initialPage={1}>
        <View key="2">
          <CameraScreen />
        </View>
        <View key="1">
          <HomeScreen />
        </View>
        <View key="3">
          <HomeScreen2 />
        </View>
      </PagerView>
    </cartContext.Provider>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
