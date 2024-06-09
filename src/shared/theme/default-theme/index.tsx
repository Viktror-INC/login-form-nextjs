import { ThemeOptions } from "@mui/material";

import { IPalettes, palettes } from "..";
import { DefaultThemeOutlinedInput } from "./components/default-theme-outlined-input";

export const defaultTheme = (props: IPalettes): ThemeOptions => {
  const { paletteMode } = props;
  const palette = palettes[paletteMode];
  return {
    palette,
    components: {
      MuiOutlinedInput: DefaultThemeOutlinedInput(palette),
    },
  };
};
