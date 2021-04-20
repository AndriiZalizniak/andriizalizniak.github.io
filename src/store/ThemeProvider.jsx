import React, { createContext, useCallback, useEffect, useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "@/constants/themes";

import SetValues from "@/helpers/setCssVars";

export const themes = {
  default: LIGHT_THEME,
  dark: DARK_THEME,
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState(themes.default);

  const setCurrentTheme = useCallback(() => {
    setTheme((prevState) =>
      prevState === themes.dark ? themes.default : themes.dark
    );
  }, []);

  useEffect(() => {
    SetValues(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
