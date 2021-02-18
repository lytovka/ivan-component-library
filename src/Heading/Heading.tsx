import React from "react";
import styled from "styled-components";

import { IHeadingProps } from "./Heading.types";

export const StyledHeading = styled.h1<IHeadingProps>`
  color: ${(props) => props.fontColor};
  margin: 0;
`;

export const Heading = ({
  children,
  fontColor = "black",
  level = 1,
}: IHeadingProps) => (
  <StyledHeading data-testid="heading" fontColor={fontColor}>
    {children}
  </StyledHeading>
);
