import { StatusBar, SafeAreaView } from "react-native";
import { styled } from "styled-components/native";

export const SafeArea_View = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
