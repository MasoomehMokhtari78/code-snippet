import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-php";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-python";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";

import "prismjs/components/prism-sql";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-nginx";
import type { CodeEditorProps } from "../types";

export const CodeEditor = ({
  value = "",
  onChange = () => {},
  language = "javascript",
}: CodeEditorProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const preRef = React.useRef<HTMLPreElement | null>(null);

  const highlighted = React.useMemo(() => {
    const grammar = Prism.languages[language] || Prism.languages.plaintext;
    return Prism.highlight(value, grammar, language);
  }, [value, language]);

  return (
    <div
      style={{
        position: "relative",
        fontFamily: "monospace",
        backgroundColor: "#1e1e1e",
      }}
    >
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
