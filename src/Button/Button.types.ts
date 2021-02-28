import { HTMLAttributes } from "react";

export type ButtonSize = "sm" | "rg"

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: string;
}
