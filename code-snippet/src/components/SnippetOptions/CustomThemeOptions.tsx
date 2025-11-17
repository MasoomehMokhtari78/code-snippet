import { Button } from "../Button";

const tokenStylesMap = [
  "text",
  "keyword",
  "string",
  "comment",
  "gutter",
  "selection",
  "function",
];

type Props = {
  customTheme: {
    background: string;
    editorStyle: {
      backgroundColor: string;
    };
    tokenStyles: Record<string, string>;
  };
  setcustomTheme: React.Dispatch<
    React.SetStateAction<{
      background: string;
      editorStyle: {
        backgroundColor: string;
      };
      tokenStyles: any;
    }>
  >;
  showCustomTheme: boolean;
  setShowCustomTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CustomThemeOptions = ({
  customTheme,
  setcustomTheme,
  showCustomTheme,
  setShowCustomTheme,
}: Props) => {
  return (
    <>
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
                style={{ height: "50px" }}
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
              style={{ height: "50px" }}
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
              style={{ height: "50px" }}
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
    </>
  );
};
