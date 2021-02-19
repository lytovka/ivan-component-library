export interface IFont {
  family: IFontFamily;
  size: Record<FontScaleType, string>;
  weight: Record<FontWeightKeywordType, FontWeightNumericType>;
}

export type FontScaleType = 100 | 200 | 300 | 400 | 500 | 600 | 700;

export type FontWeightKeywordType = "normal" | "bold";
export type FontWeightNumericType = "400" | "700";
interface IFontFamily {
  heading: string;
  paragraph: string;
}

const FONT_SIZE: IFont["size"] = {
  100: "1.2rem",
  200: "1.5rem",
  300: "1.8rem",
  400: "2.4rem",
  500: "3.6rem",
  600: "4.8rem",
  700: "6rem",
};

const FONT_FAMILY: IFont["family"] = {
  heading: "Montserrat, sans-serif",
  paragraph: "Domine, serif",
};

const FONT_WEIGHT: IFont["weight"] = {
  bold: "400",
  normal: "700",
};

export const font: IFont = {
  family: FONT_FAMILY,
  size: FONT_SIZE,
  weight: FONT_WEIGHT,
};
