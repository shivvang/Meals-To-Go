import { styled } from "styled-components/native";
import { Text } from "react-native";

const defaultTextStyles = (theme) => `
 font-family:${theme.fonts.body};
 font-weight:${theme.fontWeights.regular};
 color:${theme.colors.text.primary};
 flex-wrap:wrap;
 margin-top:0px;
 margin-bottom:0px;
`;

const body = (theme) => `
font-size:${theme.fontSizes.body};
`;

const label = (theme) => `
font-family:${theme.fonts.heading};
font-size:${theme.fontSizes.body};
font-weight:${theme.fontWeights.medium};
`;

const caption = (theme) => `
font-size:${theme.fontSizes.caption};
font-weight:${theme.fontWeights.bold};
`;

const error = (theme) => `
font-size:${theme.colors.red};
`;

const hint = (theme) => `
font-size:${theme.fontSizes.body}
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
export const TEXT = styled(Text)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

TEXT.defaultProps = {
  variant: "body",
};
