import { IBreakpoints, breakpoints } from "./breakpoints";
import { IFont, font } from "./font";

interface ITheme {
  breakpoints: IBreakpoints;
  font: IFont;
}

export const theme: ITheme = {
  font,
  breakpoints,
};
