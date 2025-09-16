import { useEffect, useState } from "react";
import type { EditorTheme, ThemeType } from "../types";
import { themes } from "./themes";

export const useTheme = (theme: ThemeType) => {
  const [finalTheme, setFinalTheme] = useState<EditorTheme>(themes.oneDark);

  useEffect(() => {
    const styleId = "custom-theme";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    let themeObj: EditorTheme;

    if (typeof theme === "object") {
      themeObj = theme;
    } else if (theme in themes) {
      themeObj = themes[theme as keyof typeof themes];
    } else {
      themeObj = themes.oneDark;
    }

    setFinalTheme(themeObj);

    const cssString = Object.entries(themeObj.tokenStyles || {})
      .map(([token, style]) => `.token.${token} { color: ${style}; }`)
      .join("\n");

    styleEl.innerHTML = cssString;
  }, [theme]);

  return { finalTheme };
};
