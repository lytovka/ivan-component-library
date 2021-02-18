export interface IFont {
  family: IFontFamily;
  size: Record<FontScaleType, string>;
}

type FontScaleType = 100 | 200 | 300 | 400 | 500 | 600;

interface IFontFamily {
  heading: string;
  paragraph: string;
}

// Geometric progression
const FONT_SIZE: Record<FontScaleType, string> = {
  100: ".4rem",
  200: ".8rem",
  300: "1.6rem",
  400: "3.2rem",
  500: "6.4rem",
  600: "12.8rem",
};

const FONT_FAMILY: IFontFamily = {
  heading: "Montserrat, sans-serif",
  paragraph: "Domine, serif",
};

export const font: IFont = {
  family: FONT_FAMILY,
  size: FONT_SIZE,
};
