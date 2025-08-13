import { createContext, use } from "react";
import type { ContextType } from "@/types/theme";

type ContexType = null | ContextType;

export const ThemeContext = createContext<ContexType>(null);

export function useTheme() {
  return use(ThemeContext);
}
