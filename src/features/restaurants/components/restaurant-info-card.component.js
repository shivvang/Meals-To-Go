import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Styled } from "styled-components/native";

const Title = Styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurnt = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/1:1/w_1080,h_1080,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png",
    ],
    address = "koi sadak",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurnt;

  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.card}
          source={{ uri: photos[0] }}
        />
        <Title>{name}</Title>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
