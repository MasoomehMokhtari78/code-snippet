import { createContext, useContext, useRef, type ReactNode } from "react";
import { toPng, toSvg } from "html-to-image";

type SnippetContextType = {
  editorRef: React.RefObject<HTMLDivElement | null>;
  exportAsPng: () => Promise<void>;
  exportAsSvg: () => Promise<void>;
};

const SnippetContext = createContext<SnippetContextType | null>(null);

export const SnippetContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  const exportAsPng = async () => {
    if (!editorRef.current) return;
    const dataUrl = await toPng(editorRef.current);
    const link = document.createElement("a");
    link.download = "snippet.png";
    link.href = dataUrl;
    link.click();
  };

  const exportAsSvg = async () => {
    if (!editorRef.current) return;
    const dataUrl = await toSvg(editorRef.current);
    const link = document.createElement("a");
    link.download = "snippet.svg";
    link.href = dataUrl;
    link.click();
  };

  return (
    <SnippetContext.Provider value={{ editorRef, exportAsPng, exportAsSvg }}>
      {children}
    </SnippetContext.Provider>
  );
};

export const useSnippetContext = () => {
  const ctx = useContext(SnippetContext);
  if (!ctx)
    throw new Error(
      "useSnippetExport must be used inside SnippetExportProvider"
    );
  return ctx;
};
