import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, Text, View, SafeAreaView, Platform } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { styled } from "styled-components/native";

const SafeArea_View = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea_View>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea_View>
  );
};
