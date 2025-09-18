import Prism from "prismjs";

const languageMap: Record<string, string> = {
  markup: "prismjs/components/prism-markup",
  "markup-templating": "prismjs/components/prism-markup-templating",
  clike: "prismjs/components/prism-clike",
  c: "prismjs/components/prism-c",
  cpp: "prismjs/components/prism-cpp",
  csharp: "prismjs/components/prism-csharp",
  java: "prismjs/components/prism-java",
  kotlin: "prismjs/components/prism-kotlin",
  swift: "prismjs/components/prism-swift",
  go: "prismjs/components/prism-go",
  rust: "prismjs/components/prism-rust",
  php: "prismjs/components/prism-php",
  ruby: "prismjs/components/prism-ruby",
  python: "prismjs/components/prism-python",
  javascript: "prismjs/components/prism-javascript",
  typescript: "prismjs/components/prism-typescript",
  jsx: "prismjs/components/prism-jsx",
  tsx: "prismjs/components/prism-tsx",
  json: "prismjs/components/prism-json",
  yaml: "prismjs/components/prism-yaml",
  markdown: "prismjs/components/prism-markdown",
  bash: "prismjs/components/prism-bash",
  css: "prismjs/components/prism-css",
  scss: "prismjs/components/prism-scss",
  sql: "prismjs/components/prism-sql",
  graphql: "prismjs/components/prism-graphql",
  docker: "prismjs/components/prism-docker",
  nginx: "prismjs/components/prism-nginx",
};

export async function loadLanguage(lang: string) {
  if (Prism.languages[lang]) {
    return;
  }

  const filePath = languageMap[lang];
  if (!filePath) {
    console.warn(`Language '${lang}' is not supported or mapped.`);
    return;
  }

  try {
    await import(filePath);
  } catch (error) {
    console.error(`Failed to load language: ${lang}`, error);
  }
}

export const selectedLanguages = Prism;
