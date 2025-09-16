import type { CSSProperties } from "react";
import { CodeEditor } from "./CodeEditor";
import { Header } from "./Header";
import type { CodeEditorProps } from "../types";

export type LayoutType = CodeEditorProps & {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  padding?: CSSProperties["padding"];
  backgroundColor?: CSSProperties["backgroundColor"];
};

export const SnippetLayout = ({
  width,
  height,
  backgroundColor = "#185a93ff",
  padding = "16px",
  ...rest
}: LayoutType) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding,
        backgroundColor,
        width,
        height,
      }}
    >
      <Header />
      <CodeEditor {...rest} />
    </div>
  );
};
