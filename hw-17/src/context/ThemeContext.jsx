
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { createContext } from 'react';

export const themeSwitcher = createContext(null)

const lightTheme = createTheme({
  palette: {
    mode: "light",
    custom: {
      backgroundColorBtn: "green",
      colorBtn: "#fff",
      backgroundColorBtnHover: "red",
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    custom: {
      backgroundColorBtn: "lightgreen",
      colorBtn: "#000",
      backgroundColorBtnHover: "red",
    }
  }
})

const Theme = ({ children }) => {

  const [typeTheme, setTypeTheme] = useState("light");

  const toggleTheme = () => {
    return setTypeTheme(prevTypeTheme => prevTypeTheme === "light" ? "dark" : "light");
  }

  return (
    <themeSwitcher.Provider value={toggleTheme}>
      <ThemeProvider theme={typeTheme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </themeSwitcher.Provider>
  )
}

export default Theme;

