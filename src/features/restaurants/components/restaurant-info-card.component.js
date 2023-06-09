import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Address = styled(View)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
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
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <SvgXml xml={star} width={20} height={20} />
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
