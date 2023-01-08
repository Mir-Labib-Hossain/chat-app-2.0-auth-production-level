import { CssBaseline } from "@mui/material"
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles"
import React, { useMemo } from "react"
import { useAppSelector } from "../app/hooks"
import GlobalStyles from "./globalStyles"
import palette from "./palette"

type Props = {
  children: React.ReactNode
}

const ThemeConfig = ({ children }: Props) => {
  const isLight = useAppSelector((state) => state.theme.isLight)
  const themeOptions = useMemo(
    () => ({
      palette: isLight
        ? { ...palette.light, type: "light" }
        : { ...palette.dark, type: "dark" },
    }),
    [isLight]
  )

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeConfig
