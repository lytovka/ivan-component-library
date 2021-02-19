export interface IScale {
  spacing: Record<SpacingType, string>;
}

export type SpacingType = 100 | 200 | 300 | 400 | 500 | 600;

// Geometric progression
export const SPACING_SCALE: IScale["spacing"] = {
  100: ".4rem",
  200: ".8rem",
  300: "1.6rem",
  400: "3.2rem",
  500: "6.4rem",
  600: "12.8rem",
};

export const spacing: IScale = {
  spacing: SPACING_SCALE,
};
