import { useState } from "react";
import "./App.css";
import { SnippetLayout } from "./components/SnippetLayout";
import { SnippetContextProvider } from "./Context/SnippetContext";
import type { LangRules } from "./lib/highlighter";
import { themes } from "./themes/themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/Select";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { languageMap } from "./lib/LanguageMap";

const tokenStylesMap = [
  "text",
  "keyword",
  "string",
  "comment",
  "gutter",
  "selection",
  "function",
];

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

function ToolbarSelect<T extends string>({
  value,
  onValueChange,
  options,
  placeholder,
}: {
  value: T;
  onValueChange: (val: T) => void;
  options: T[];
  placeholder: string;
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function SnippetComp() {
  const [value, setValue] = useState<string>();
  const [fontSize, setFontSize] = useState("14px");
  const [fontFamily, setFontFamily] = useState("monospace");
  const [width, setWidth] = useState("600px");
  const [height, setHeight] = useState("300px");
  const [padding, setPadding] = useState("16px");
  const [glassEffect, setGlassEffect] = useState(false);
  const [transparentBackground, setTransparentBackground] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>();
  const [language, setLanguage] = useState("javascript");
  const [showStyles, setShowStyles] = useState(false);
  const [showCustomTheme, setShowCustomTheme] = useState(false);
  const [customTheme, setcustomTheme] = useState({
    background: "#ffffff",
    editorStyle: { backgroundColor: "#1e1e1e" },
    tokenStyles: tokenStylesMap.reduce((acc, key) => {
      acc[key] = "#ffffff";
      return acc;
    }, {} as Record<string, string>),
  });
  const [defaultTheme, setDefaultTheme] =
    useState<keyof typeof themes>("VSCode Dark+");

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 p-6 overflow-auto min-w-fit">
      <div className="flex flex-col items-center gap-2">
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "4rem",
            color: "transparent",
            WebkitTextStroke: "2px #4990e2",
          }}
        >
          Code Snippet
        </h1>
        <p className="text-xs text-center text-gray-400">
          Create and share your source code. <br /> A customizable code snippet
          with colorful features.
        </p>
      </div>
      <div className="border-2 border-white p-4 rounded-lg shadow-md mt-4 flex flex-col gap-4 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start w-full">
          <ToolbarSelect
            value={language}
            onValueChange={setLanguage}
            options={[...Object.keys(languageMap), "mathRules", "todoRules"]}
            placeholder="Language"
          />

          <ToolbarSelect
            value={defaultTheme}
            onValueChange={setDefaultTheme}
            options={Object.keys(themes) as Array<typeof defaultTheme>}
            placeholder="Theme"
          />
          {/* Token Styles */}
          <Button
            className="px-3 py-1 border rounded-md text-sm self-start"
            onClick={() => setShowCustomTheme((prev) => !prev)}
          >
            {showCustomTheme ? "Disable Custom Theme" : "Enable Custom Theme"}
          </Button>
          {showCustomTheme ? (
            <>
              {tokenStylesMap.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <label className="w-24 capitalize">{key}</label>
                  <input
                    type="color"
                    value={customTheme.tokenStyles[key]}
                    onChange={(e) =>
                      setcustomTheme((prev) => ({
                        ...prev,
                        tokenStyles: {
                          ...prev.tokenStyles,
                          [key]: e.target.value,
                        },
                      }))
                    }
                  />
                  <input
                    type="text"
                    value={customTheme.tokenStyles[key]}
                    disabled
                    className="w-20 px-1 py-0.5 border rounded text-sm text-gray-600"
                  />
                </div>
              ))}
              <div>
                <label className="w-24">Snippet Background</label>
                <input
                  type="color"
                  value={customTheme.background}
                  onChange={(e) =>
                    setcustomTheme((prev) => ({
                      ...prev,
                      background: e.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  value={customTheme.editorStyle.backgroundColor}
                  disabled
                  className="w-20 px-1 py-0.5 border rounded text-sm text-gray-600"
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="w-24">Editor Background</label>
                <input
                  type="color"
                  value={customTheme.editorStyle.backgroundColor}
                  onChange={(e) =>
                    setcustomTheme((prev) => ({
                      ...prev,
                      editorStyle: {
                        ...prev.editorStyle,
                        backgroundColor: e.target.value,
                      },
                    }))
                  }
                />
                <input
                  type="text"
                  value={customTheme.editorStyle.backgroundColor}
                  disabled
                  className="w-20 px-1 py-0.5 border rounded text-sm text-gray-600"
                />
              </div>
            </>
          ) : undefined}
          <Button
            className="px-3 py-1 border rounded-md text-sm self-start"
            onClick={() => setShowStyles((prev) => !prev)}
          >
            {showStyles ? "Hide Styles" : "More Styles"}
          </Button>
          {showStyles && (
            <>
              {/* Font Family & Font Size */}
              <ToolbarSelect
                value={fontFamily}
                onValueChange={setFontFamily}
                options={["monospace", "cursive", "sans-serif"]}
                placeholder="Font"
              />
              <ToolbarSelect
                value={fontSize}
                onValueChange={setFontSize}
                options={["12px", "14px", "16px", "18px", "20px"]}
                placeholder="Font Size"
              />

              {/* Width, Height, Padding */}
              <Input
                type="text"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="px-2 py-1 border rounded-md text-sm"
              />
              <Input
                type="text"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="px-2 py-1 border rounded-md text-sm"
              />
              <Input
                type="text"
                placeholder="Padding"
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
                className="px-2 py-1 border rounded-md text-sm"
              />

              {/* Glass & Transparent */}
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={glassEffect}
                  onChange={(e) => setGlassEffect(e.target.checked)}
                />
                Glass
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={transparentBackground}
                  onChange={(e) => setTransparentBackground(e.target.checked)}
                />
                Transparent
              </label>

              {/* Background Image */}
              <Input
                type="text"
                placeholder="Background image URL"
                value={backgroundImage || ""}
                onChange={(e) => setBackgroundImage(e.target.value)}
                className="px-2 py-1 border rounded-md text-sm min-w-[200px]"
              />
            </>
          )}
        </div>

        <SnippetLayout
          value={value}
          onChange={setValue}
          language={language}
          customLanguages={languages}
          theme={showCustomTheme ? customTheme : defaultTheme}
          fontSize={fontSize}
          fontFamily={fontFamily}
          width={width}
          height={height}
          padding={padding}
          glassEffect={glassEffect}
          backgroundImage={backgroundImage}
          transparentBackground={transparentBackground}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <SnippetContextProvider>
      <SnippetComp />
    </SnippetContextProvider>
  );
}

export default App;
