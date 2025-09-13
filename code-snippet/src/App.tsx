import { useState } from "react";
import { CodeEditor } from "./components/CodeEditor";
import "prismjs/themes/prism-tomorrow.css";

function App() {
  const [value, setValue] = useState<string | undefined>();
  return (
    <>
      <CodeEditor
        value={value}
        onChange={(newValue) => setValue(newValue)}
        language="javascript"
      />
    </>
  );
}

export default App;
