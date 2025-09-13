import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import { SnippetLayout } from "./components/SnippetLayout";

function App() {
  const [value, setValue] = useState<string | undefined>();
  return (
    <>
      <SnippetLayout
        value={value}
        onChange={(newValue) => setValue(newValue)}
        language="javascript"
      />
    </>
  );
}

export default App;
