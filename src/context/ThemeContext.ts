import { createContext, use } from "react";

type ContexType = null | object;

export const ThemeContext = createContext<ContexType>(null);

export function useTheme() {
  return use(ThemeContext);
}
