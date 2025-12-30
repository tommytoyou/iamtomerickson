import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  // Check localStorage and prefers-color-scheme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setIsDark(storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Update document classes and localStorage when isDark changes
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
