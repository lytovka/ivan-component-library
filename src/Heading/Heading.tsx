import styled from "styled-components";
import { theme } from "../theme";

import { IHeadingProps } from "./Heading.types";

export const Heading = styled.h1<IHeadingProps>`
  color: ${(props) => props.fontColor || "black"};
  display: block;
  font-family: ${theme.font.family.heading};
  font-size: ${(props) => theme.font.size[props.fontSize || 400]};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: 0;
`;

Heading.defaultProps = {
  fontColor: "black",
  fontSize: 400,
  fontWeight: "400",
};
