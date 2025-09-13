import React from "react";
import Prism from "prismjs";

export type CodeEditorProps = {
  value?: string;
  onChange?: (v: string) => void;
  language?: string;
};

export const CodeEditor = ({
  value = "",
  onChange = () => {},
  language = "javascript",
}: CodeEditorProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const preRef = React.useRef<HTMLPreElement | null>(null);

  const highlighted = React.useMemo(() => {
    const grammar = Prism.languages.javascript;
    return Prism.highlight(value, grammar, language);
  }, [value, language]);

  return (
    <div style={{ position: "relative", fontFamily: "monospace" }}>
      <pre
        ref={preRef}
        aria-hidden
        style={{
          margin: 0,
          padding: 16,
          overflow: "auto",
          whiteSpace: "pre",
          minHeight: 200,
        }}
      >
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
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
