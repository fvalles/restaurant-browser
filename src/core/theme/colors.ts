import { palette } from "./palette";

export const Colors = {
  // color names are based on https://colornamer.netlify.app/
  black: palette.black,
  lightGrey: palette.drWhite,
  primary: palette.coldSteel,
  white: palette.white,
  secondary: palette.wisteriaLightSoftBlue,
  shadow: palette.mercury,
};

export type ColorsType = typeof Colors;
export type KeyColors = keyof ColorsType;
