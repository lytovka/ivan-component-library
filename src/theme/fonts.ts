interface IFonts {
  family: IFontFamily;
  size: { [TKey in FontScaleType]: string };
}

type FontScaleType = 100 | 200 | 300 | 400 | 500 | 600;

interface IFontFamily {
  heading: string;
  paragraph: string;
}

const FONT_SIZE: { [TKey in FontScaleType]: string } = {
  100: ".8rem",
  200: "1rem",
  300: "1.4rem",
  400: "2rem",
  500: "3.6rem",
  600: "4rem",
};

const FONT_FAMILY: IFontFamily = {
  heading: "Montserrat, sans-serif",
  paragraph: "Domine, serif",
};

export const fonts: IFonts = {
  family: FONT_FAMILY,
  size: FONT_SIZE,
};
