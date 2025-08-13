export type Theme = "light" | "dark" | "system";

export type ThemeProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export type ContextType = {
  theme: Theme;
  handleThemeChange: (theme: Theme) => void;
};
