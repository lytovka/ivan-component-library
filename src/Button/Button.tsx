import { darken } from "polished";
import styled from "styled-components";
import { theme } from "../theme";
import { ButtonSize, IButtonProps } from "./Button.types";

//TODO: rework transformer
const BUTTON_SIZE_TRANSFORMER: { [key in ButtonSize]: string } = {
  sm: `${theme.spacing[200]} ${theme.spacing[300]}`,
  rg: `${theme.spacing[300]} ${theme.spacing[400]}`,
};

const BUTTON_FONT_SIZE_TRANSFORMER: { [key in ButtonSize]: string } = {
  sm: `${theme.font.size[200]}`,
  rg: `${theme.font.size[300]}`,
};

export const Button = styled.button<IButtonProps>`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 100px;
  color: white;
  cursor: pointer;
  display: block;
  font-family: ${theme.font.family.paragraph};
  font-size: ${(props) => BUTTON_FONT_SIZE_TRANSFORMER[props.size]};
  padding: ${(props) => BUTTON_SIZE_TRANSFORMER[props.size]};

  :hover {
    background-color: ${(props) => darken("0.1", props.color)};
  }
  :focus {
    border: 2px solid ${(props) => darken("0.1", props.color)};
  }
`;

Button.defaultProps = {
  color: "red",
  size: "sm",
};
