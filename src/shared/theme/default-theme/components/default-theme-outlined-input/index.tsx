import { PaletteOptions } from "@mui/material";
import { CustomPaletteOptionsPartial } from "src/shared/theme";

export const DefaultThemeOutlinedInput = (
  palette: CustomPaletteOptionsPartial
) => ({
  styleOverrides: {
    root: {
      borderRadius: "50px",
      width: "100%",
      border: `2px solid ${palette.outlinedInput?.border}`,
      color: palette.outlinedInput?.textColor,

      ".MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${palette.outlinedInput?.border}`,
      },

      "&.Mui-focused": {
        border: `2px solid ${palette.outlinedInput?.focusedBorder}`,
      },

      "&.Mui-error": {
        border: `2px solid ${palette.outlinedInput?.errorBorder}`,
        backgroundColor: palette.outlinedInput?.errorBackground,

        input: {
          backgroundColor: "transparent",
        },
      },

      "&.Mui-success": {
        border: `2px solid ${palette.outlinedInput?.successBorder}`,
        backgroundColor: palette.outlinedInput?.successBackground,

        input: {
          backgroundColor: 'transparent',
          borderRadius: "inherit",
        },
      },

      input: {
        padding: "18px 24px",
        fontSize: "16px",
        backgroundColor: "inherit",
        borderRadius: "inherit",
      },

      fieldset: {
        display: "none",
      },
    },
  },
});
