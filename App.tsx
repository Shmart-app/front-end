import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/homeScreen/homeScreen";
import Appstyles from "./scss/main.scss";
import { NavigationContainer } from "@react-navigation/native";
import CameraScreen from "./components/cameraScreen/cameraScreen";
import PagerView from "react-native-pager-view";
import BottomBar from "./components/homeScreen/helper/bottomBar";

export default function App() {
  return (
    <PagerView scrollEnabled={true} style={styles.pagerView} initialPage={1}>
      <View key="2">
        <CameraScreen />
      </View>
      <View key="1">
        <HomeScreen />
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
