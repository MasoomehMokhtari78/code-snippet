import { useState } from "react";
import "prismjs/themes/prism.css";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";
import { SnippetContextProvider } from "./Context/SnippetContext";

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
        language="python"
        theme="Dracula"
        fontSize="14px"
        fontFamily="cursive"
      />
    </>
  );
}

export default App;
