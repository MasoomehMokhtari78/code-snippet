import { useState } from "react";
import "prismjs/themes/prism.css";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";

function App() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <>
      <SnippetLayout
        value={value}
        onChange={(newValue: string) => setValue(newValue)}
        language="javascript"
        // theme={customTheme}
        isGlassmorph={true}
      />
    </>
  );
}

export default App;
