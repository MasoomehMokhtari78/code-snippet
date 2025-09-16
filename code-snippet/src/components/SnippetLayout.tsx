import type { CSSProperties } from "react";
import { CodeEditor } from "./CodeEditor";
import type { CodeEditorProps } from "../types";
import { useTheme } from "../themes/useTheme";
import { Header } from "./Header";

export type LayoutType = CodeEditorProps & {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  isGlassmorph?: boolean;
  backgroundImage?: string;
  isBackgroundTransparent?: boolean;
};

export const SnippetLayout = ({
  width,
  height,
  padding = "16px",
  theme = "VSCode Dark+",
  isGlassmorph,
  backgroundImage,
  isBackgroundTransparent,
  ...rest
}: LayoutType) => {
  const { finalTheme } = useTheme(theme, isGlassmorph);

  const baseBackground = isBackgroundTransparent
    ? {
        backgroundImage: `
        linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.05) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.05) 75%)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
      }
    : { background: finalTheme?.background };

  const imageBackground = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding,
        width,
        height,
        ...baseBackground,
        ...imageBackground,
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
