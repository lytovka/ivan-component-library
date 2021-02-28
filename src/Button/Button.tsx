import styled from "styled-components";
import { theme } from "../theme";
import { IButtonProps } from "./Button.types";

export const Button = styled.button<IButtonProps>`
  background-color: ${(props) => props.color || "red"};
  border: 1px solid ${(props) => props.color || "red"};
  cursor: pointer;
  font-family: ${theme.font.family.paragraph};
  padding: ${theme.spacing[200]} ${theme.spacing[300]};
`;
