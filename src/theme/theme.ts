import { IBreakpoints, breakpoints } from "./breakpoints";
import { IFont, font } from "./font";
import { SpacingType, SPACING_SCALE } from "./spacing";

interface ITheme {
  breakpoints: IBreakpoints;
  font: IFont;
  spacing: {[key in SpacingType]: string};
}

export const theme: ITheme = {
  font,
  breakpoints,
  spacing: SPACING_SCALE,
};
