import { HTMLAttributes } from "react";
import { FontScaleType } from "../theme/font";
import { FontWeightKeywordType, FontWeightNumericType } from "../theme/font";
export interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontColor?: string;
  fontSize?: FontScaleType;
  fontWeight?: FontWeightNumericType | FontWeightKeywordType;
}
