import { createTheme } from "@mui/material";
import { defaultTheme } from "./default-theme";
import { lightPalette } from "./default-theme/palettes/light-palette";

export interface IPalettes {
  paletteMode: keyof typeof palettes;
}
interface IPaletteInner {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
  border: string;
  textColor: string;
  focusedBorder: string;
  errorBorder: string;
  errorBackground: string;
  successBackground: string;
  successBorder: string;
}

export interface CustomPaletteOptions {
  primary: IPaletteInner;
  outlinedInput: IPaletteInner;
}

export type CustomPaletteOptionsPartial = Partial<CustomPaletteOptions>;

export const palettes = {
  lightPalette,
};

interface IProps extends IPalettes {
  theme: keyof typeof themes;
}

const themes = {
  defaultTheme,
};

export const getTheme = ({ theme, paletteMode }: IProps) =>
  createTheme(themes[theme]({ paletteMode }));
