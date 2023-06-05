import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
const isAndroid = (Platform.OS = "android");

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>

      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: { padding: 16, flex: 1 },
});
