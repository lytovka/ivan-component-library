import React from "react";
import styled from "styled-components";

import { IHeadingProps } from "./Heading.types";

export const Heading = styled.h1<IHeadingProps>`
  color: ${(props) => props.fontColor || "black"};
  margin: 0;
`;
