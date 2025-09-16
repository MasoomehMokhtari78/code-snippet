import { useState } from "react";
import "prismjs/themes/prism.css";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";

const customTheme = {
  editorStyle: {
    backgroundColor: "#1e1f28",
    color: "#e8dfdf",
  },
  tokenStyles: {
    comment: "#0ec611",
    keyword: "#c678dd",
    string: "#98c379",
    number: "#d19a66",
    function: "#61afef",
    variable: "#e06c75",
    operator: "#56b6c2",
    className: "#e5c07b",
    constant: "#d19a66",
  },
};

function App() {
  const [value, setValue] = useState<string | undefined>();
  return (
    <>
      <SnippetLayout
        value={value}
        onChange={(newValue: string) => setValue(newValue)}
        language="javascript"
        theme={customTheme}
      />
    </>
  );
}

export default App;
