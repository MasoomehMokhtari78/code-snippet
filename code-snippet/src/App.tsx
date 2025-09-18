import { useState } from "react";
import "prismjs/themes/prism.css";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";
import { SnippetContextProvider } from "./Context/SnippetContext";
import { useSnippetContext } from "./Context/UseSnippetContext";

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
  const { exportAsPng, exportAsSvg } = useSnippetContext();
  return (
    <>
      <SnippetLayout
        value={value}
        onChange={(newValue: string) => setValue(newValue)}
        language="javascript"
        theme="Dracula"
        fontSize="14px"
        fontFamily="cursive"
        isBackgroundTransparent
      />
      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button onClick={exportAsPng}>Export as PNG</button>
        <button onClick={exportAsSvg}>Export as SVG</button>
      </div>
    </>
  );
}

export default App;
