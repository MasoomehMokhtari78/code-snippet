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

export type CodeEditorProps = {
  value?: string;
  onChange?: (v: string) => void;
  language?: Language; // <- now typed
};
