import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const getStored = () => localStorage.getItem("theme") || "system";

  const [theme, setTheme] = useState(getStored); // "light" | "dark" | "system"
  const [systemDark, setSystemDark] = useState(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Watch OS theme changes when in "system" mode
  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => setSystemDark(e.matches);
    mql.addEventListener ? mql.addEventListener("change", listener) : mql.addListener(listener);
    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", listener) : mql.removeListener(listener);
    };
  }, []);

  // Apply dark class and persist choice
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const isDark = theme === "dark" || (theme === "system" && systemDark);
    document.documentElement.classList.toggle("dark", !!isDark);
  }, [theme, systemDark]);

  const value = useMemo(
    () => ({
      theme, // "light" | "dark" | "system"
      setTheme,
      resolvedTheme: theme === "system" ? (systemDark ? "dark" : "light") : theme,
    }),
    [theme, systemDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}