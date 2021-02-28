import { HTMLAttributes } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "rg";
  color?: string;
}
