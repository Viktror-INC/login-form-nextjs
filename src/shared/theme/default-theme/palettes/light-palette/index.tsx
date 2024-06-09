import { customBlue } from "../../colors/blue";
import { CustomPaletteOptionsPartial } from "src/shared/theme";
import { customRed } from "../../colors/red";
import { customGreen } from "../../colors/green";

export const lightPalette = {
  primary: {
    main: customBlue[1000],
  },
  outlinedInput: {
    main: customBlue[1000],
    border: customBlue[200],
    focusedBorder: customBlue[1000],
    errorBorder: customRed[1000],
    textColor: customBlue[700],
    errorBackground: customRed[100],
    successBorder: customGreen[1000],
    successBackground: customGreen[100],
  },
} as CustomPaletteOptionsPartial;
