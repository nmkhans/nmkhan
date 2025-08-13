import React from "react";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

const ThemeProvider = ({
  children,
  defaultTheme = "system",
}: ThemeProps) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("Theme") as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem("Theme", theme);
  };

  const value = {
    theme,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
