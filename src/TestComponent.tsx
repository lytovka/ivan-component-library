import React from "react";
import styled from "styled-components";

import { TestComponentProps } from "./TestComponent.types";

const TestComponent = styled.h1(({$color}: TestComponentProps) =>`
  font-size: 20px;
  color: ${$color};
`)

export default TestComponent;