"use client";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "src/shared/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPalette = "lightPalette";
  const currentTheme = "defaultTheme";
  const currentTHeme = getTheme({
    theme: currentTheme,
    paletteMode: currentPalette,
  });
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={currentTHeme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
