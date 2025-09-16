import React from "react";
import { selectedLanguages } from "./SelectedLanguages";
import type { CodeEditorProps } from "../types";

export const CodeEditor = ({
  value = "",
  onChange = () => {},
  language = "javascript",
}: CodeEditorProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const preRef = React.useRef<HTMLPreElement | null>(null);

  const highlighted = React.useMemo(() => {
    const grammar =
      selectedLanguages.languages[language] ||
      selectedLanguages.languages.plaintext;
    return selectedLanguages.highlight(value, grammar, language);
  }, [value, language]);

  return (
    <div style={{ position: "relative" }}>
      <pre
        ref={preRef}
        aria-hidden
        style={{
          margin: 0,
          padding: 16,
          overflow: "auto",
          whiteSpace: "pre",
          minHeight: 200,
          fontFamily: "inherit",
        }}
      >
        <code
          style={{ fontFamily: "inherit" }}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 16,
          border: 0,
          outline: "none",
          resize: "none",
          background: "transparent",
          color: "transparent",
          caretColor: "#fff",
          fontFamily: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
        }}
      />
    </div>
  );
};
