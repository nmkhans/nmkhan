import { createContext, use } from "react";
import type { ThemeContextType } from "@/types/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
  return use(ThemeContext);
}
