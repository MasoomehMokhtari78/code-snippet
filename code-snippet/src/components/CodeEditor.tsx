import { useRef, useMemo } from "react";
import type { CodeEditorProps } from "../types";
import { javaRules, jsRules, pyRules } from "../lib/lang-rules";
import { highlightWithRules, type LangRules } from "../lib/highlighter";

const languageMap: Record<string, LangRules> = {
  javascript: jsRules,
  js: jsRules,
  python: pyRules,
  py: pyRules,
  java: javaRules,
};

export const CodeEditor = ({
  value = "",
  onChange = () => {},
  language = "javascript",
}: CodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);

  const rules = languageMap[language] || jsRules;

  const highlighted = useMemo(() => {
    return highlightWithRules(value, rules);
  }, [value, rules]);

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
