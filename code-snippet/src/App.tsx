import { useState } from "react";
import "prismjs/themes/prism.css";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";

function App() {
  const customTheme = {
    editorStyle: {
      backgroundColor: "#070d4273",
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
  const [value, setValue] = useState<string | undefined>();
  return (
    <>
      <SnippetLayout
        value={value}
        onChange={(newValue: string) => setValue(newValue)}
        language="javascript"
        // theme={customTheme}
        theme="Dracula"
        isGlassmorph={true}
        // background="linear-gradient(135deg, #8084ac 0%, #2134b0 50%, #1a1b23 100%)"
      />
    </>
  );
}

export default App;
