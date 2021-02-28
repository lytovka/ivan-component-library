export type SpacingType = 100 | 200 | 300 | 400 | 500 | 600;

// Geometric progression
export const SPACING_SCALE: {[key in SpacingType]: string} = {
  100: ".4rem",
  200: ".8rem",
  300: "1.6rem",
  400: "3.2rem",
  500: "6.4rem",
  600: "12.8rem",
};
