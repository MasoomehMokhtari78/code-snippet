import { useRef, useMemo } from "react";
import type { CodeEditorProps, LanguageType } from "../types";
import { jsRules } from "../lib/lang-rules";
import { highlightWithRules } from "../lib/highlighter";
import { languageMap } from "../lib/LanguageMap";

export const CodeEditor = ({
  value = "",
  onChange = () => {},
  language = "javascript",
  customLanguages,
}: CodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);

  const rules =
    customLanguages?.[language] ??
    languageMap[language as LanguageType] ??
    jsRules;

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
