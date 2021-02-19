import { theme } from "../theme";

interface IMediaQueries {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export const MEDIA_QUERIES: IMediaQueries = {
  xs: `@media screen and (min-width: ${theme.breakpoints.xs})`,
  sm: `@media screen and (min-width: ${theme.breakpoints.sm})`,
  md: `@media screen and (min-width: ${theme.breakpoints.md})`,
  lg: `@media screen and (min-width: ${theme.breakpoints.lg})`,
  xl: `@media screen and (min-width: ${theme.breakpoints.xl})`,
  xxl: `@media screen and (min-width: ${theme.breakpoints.xxl})`,
};
