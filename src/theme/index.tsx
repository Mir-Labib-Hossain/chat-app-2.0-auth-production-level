import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React, { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import palette from "./palette";

type Props = {
  children: React.ReactNode;
};

const ThemeConfig = ({ children }: Props) => {
  const isLight = useAppSelector((state) => state.theme.isLight);
  console.log(isLight);
  
  const themeOptions = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, type: "light" } : { ...palette.dark, type: "dark" },
    }),
    [isLight]
  );
  const theme = createTheme(themeOptions);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
