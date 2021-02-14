import styled from "styled-components";

import { IHeadingProps } from "./Heading.types";

export const Heading = styled.h1(
  ({ fontColor = "black" }: IHeadingProps) => `
    color: ${fontColor};
`
);
