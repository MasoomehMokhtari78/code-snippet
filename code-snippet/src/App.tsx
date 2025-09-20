import { useState } from "react";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";
import { SnippetContextProvider } from "./Context/SnippetContext";
import type { LangRules } from "./lib/highlighter";

const languages: Record<string, LangRules> = {
  mathRules: [
    { type: "number", regex: /\b\d+(\.\d+)?\b/g },
    { type: "operator", regex: /[+\-*/=]/g },
  ],
  todoRules: [
    { type: "keyword", regex: /\b(TODO|DONE|FIXME)\b/g },
    { type: "comment", regex: /#.*/g },
  ],
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <SnippetContextProvider>
        <SnippetComp />
      </SnippetContextProvider>
    </div>
  );
}

function SnippetComp() {
  const [value, setValue] = useState<string | undefined>();
  return (
    <>
      <SnippetLayout
        value={value}
        onChange={(newValue: string) => setValue(newValue)}
        language="html"
        theme="VSCode Dark+"
        fontSize="14px"
        fontFamily="cursive"
        glassEffect
        customLanguages={languages}
      />
    </>
  );
}

export default App;
