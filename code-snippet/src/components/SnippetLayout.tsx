import type { CSSProperties } from "react";
import { CodeEditor } from "./CodeEditor";
import type { CodeEditorProps } from "../types";
import { useTheme } from "../themes/useTheme";
import { Header } from "./Header";

export type LayoutType = CodeEditorProps & {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  background?: CSSProperties["background"];
  isGlassmorph?: boolean;
};

export const SnippetLayout = ({
  width,
  height,
  background = "#185a93ff",
  padding = "16px",
  theme = "VSCode Dark+",
  isGlassmorph,
  ...rest
}: LayoutType) => {
  const { finalTheme } = useTheme(theme, isGlassmorph);
  console.log(finalTheme);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding,
        background: finalTheme?.background ?? background,
        width,
        height,
      }}
    >
      <div
        style={{
          position: "relative",
          fontFamily: "monospace",
          background: finalTheme?.editorStyle?.backgroundColor,
          borderRadius: "16px",
          ...(isGlassmorph && {
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(202, 178, 178, 0.3)",
            backdropFilter: "blur(5px)",
          }),
        }}
      >
        <Header />
        <CodeEditor theme={finalTheme} {...rest} />
      </div>
    </div>
  );
};
