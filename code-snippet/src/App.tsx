import { useState } from "react";
import "prismjs/themes/prism.css";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";

function App() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <SnippetLayout
        value={value}
        onChange={(newValue: string) => setValue(newValue)}
        language="javascript"
        theme="Dracula"
        fontSize="14px"
        fontFamily="cursive"
      />
    </div>
  );
}

export default App;
