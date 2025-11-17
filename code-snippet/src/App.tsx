import { useState } from "react";
import "./App.css";
import {
  SnippetLayout,
  SnippetContextProvider,
  useSnippetContext,
  type LangRules,
  themes,
  languageMap,
} from "react-snippet-ui";
import { SelectWithExport } from "./components/SnippetOptions/SelectWithExport";
import { ToolbarSelect } from "./components/SnippetOptions/ToolbarSelect";
import { CustomThemeOptions } from "./components/SnippetOptions/CustomThemeOptions";
import { StylesOptions } from "./components/SnippetOptions/StylesOptions";

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

export function SnippetComp() {
  const { editorRef, exportAsPng, exportAsSvg } = useSnippetContext();
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
    <div className="flex flex-col items-center justify-center min-h-fit h-full gap-8 p-6 overflow-auto min-w-fit">
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
          {/* Language Select */}
          <ToolbarSelect
            value={language}
            onValueChange={setLanguage}
            options={[...Object.keys(languageMap), "mathRules", "todoRules"]}
            placeholder="Language"
          />
          {/* Built-in Theme Select */}
          <ToolbarSelect
            value={defaultTheme as string}
            onValueChange={(val) => setDefaultTheme(val as keyof typeof themes)}
            options={Object.keys(themes) as Array<string>}
            placeholder="Theme"
          />

          {/* Png and Svg export options */}
          <SelectWithExport
            exportAsPng={exportAsPng}
            exportAsSvg={exportAsSvg}
          />

          {/* Custom Theme Options */}
          <CustomThemeOptions
            customTheme={customTheme}
            setcustomTheme={setcustomTheme}
            showCustomTheme={showCustomTheme}
            setShowCustomTheme={setShowCustomTheme}
          />
          {/* Style options */}
          <StylesOptions
            showStyles={showStyles}
            setShowStyles={setShowStyles}
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontSize={fontSize}
            setFontSize={setFontSize}
            width={width}
            setWidth={setWidth}
            height={height}
            setHeight={setHeight}
            padding={padding}
            setPadding={setPadding}
            glassEffect={glassEffect}
            setGlassEffect={setGlassEffect}
            transparentBackground={transparentBackground}
            setTransparentBackground={setTransparentBackground}
            backgroundImage={backgroundImage}
            setBackgroundImage={setBackgroundImage}
          />
        </div>

        <div ref={editorRef}>
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
