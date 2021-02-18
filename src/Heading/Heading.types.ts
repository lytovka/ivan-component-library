import { HTMLAttributes, HTMLProps, ReactNode } from "react";

type IHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontColor?: string;
}
