import styled from "styled-components";

import { ITestComponentProps } from "./TestComponent.types";

export const TestComponent = styled.h1(
  ({ $color }: ITestComponentProps) => `
  font-size: 20px;
  color: ${$color};
`
);
