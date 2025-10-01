import { Button } from "../Button";
import { ToolbarSelect } from "./ToolbarSelect";
import { Input } from "../Input";

type Props = {
  showStyles: boolean;
  setShowStyles: React.Dispatch<React.SetStateAction<boolean>>;
  fontFamily: string;
  setFontFamily: React.Dispatch<React.SetStateAction<string>>;
  fontSize: string;
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
  width: string;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  padding: string;
  setPadding: React.Dispatch<React.SetStateAction<string>>;
  glassEffect: boolean;
  setGlassEffect: React.Dispatch<React.SetStateAction<boolean>>;
  transparentBackground: boolean;
  setTransparentBackground: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundImage: string | undefined;
  setBackgroundImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const StylesOptions = ({
  showStyles,
  setShowStyles,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  width,
  setWidth,
  height,
  setHeight,
  padding,
  setPadding,
  glassEffect,
  setGlassEffect,
  transparentBackground,
  setTransparentBackground,
  backgroundImage,
  setBackgroundImage,
}: Props) => {
  return (
    <>
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
    </>
  );
};
