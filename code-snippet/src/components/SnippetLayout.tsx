import type { CSSProperties } from "react";
import { CodeEditor, type CodeEditorProps } from "./CodeEditor";
import { Header } from "./Header";

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
      <Header /> <CodeEditor {...rest} />
    </div>
  );
};
