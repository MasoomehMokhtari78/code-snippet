import type { LangRules } from "./lib/highlighter";
import type { themes } from "./themes/themes";

export type Language =
  | "plaintext"
  | "markup"
  | "clike"
  | "c"
  | "cpp"
  | "csharp"
  | "java"
  | "kotlin"
  | "swift"
  | "go"
  | "rust"
  | "php"
  | "ruby"
  | "python"
  | "javascript"
  | "typescript"
  | "jsx"
  | "tsx"
  | "json"
  | "yaml"
  | "markdown"
  | "bash"
  | "css"
  | "scss"
  | "sql"
  | "graphql"
  | "docker"
  | "nginx"
  | "markup-templating";

export type TokenStyles = {
  [token: string]: string;
};

export type EditorTheme = {
  background?: React.CSSProperties["background"];
  editorStyle?: React.CSSProperties;
  tokenStyles?: TokenStyles;
};

export type ThemeType = keyof typeof themes | EditorTheme;

export type CodeEditorProps = {
  theme?: ThemeType;
  value?: string;
  onChange?: (v: string) => void;
  language?: Language | string;
  customLanguages?: Record<string, LangRules>;
};
