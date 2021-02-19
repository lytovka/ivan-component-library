import { IBreakpoints, breakpoints } from "./breakpoints";
import { IFont, font } from "./font";
import { IScale, spacing } from "./spacing";

interface ITheme {
  breakpoints: IBreakpoints;
  font: IFont;
  spacing: IScale;
}

export const theme: ITheme = {
  font,
  breakpoints,
  spacing,
};
