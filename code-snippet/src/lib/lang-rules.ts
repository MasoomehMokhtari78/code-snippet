import type { LangRules } from "./highlighter";

export const jsRules: LangRules = [
  { type: "comment", regex: /\/\/.*|\/\*[\s\S]*?\*\//g },
  {
    type: "string",
    regex: /`(?:\\[\s\S]|[^\\`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g,
  },
  { type: "regex", regex: /\/(?!\s)(?:\\.|[^\/\\\n])+\/[gimsuy]*/g },
  {
    type: "keyword",
    regex:
      /\b(?:const|let|var|function|return|if|else|for|while|switch|case|break|class|new|try|catch|finally|throw|await|async|import|from|export)\b/g,
  },
  { type: "number", regex: /\b\d+(\.\d+)?\b/g },
  { type: "operator", regex: /[+\-*/=<>%|&!^~?:]+/g },
  { type: "identifier", regex: /\b[A-Za-z_]\w*\b/g },
];

export const pyRules: LangRules = [
  { type: "comment", regex: /#.*/g },
  {
    type: "string",
    regex:
      /(?:'''[\s\S]*?'''|"""[\s\S]*?"""|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g,
  },
  {
    type: "keyword",
    regex:
      /\b(?:def|class|return|if|elif|else|for|while|import|from|as|with|try|except|finally|lambda|pass|break|continue|in|is|and|or|not|yield)\b/g,
  },
  { type: "number", regex: /\b\d+(\.\d+)?\b/g },
  { type: "operator", regex: /[+\-*/=<>%|&!^~:]+/g },
  { type: "identifier", regex: /\b[A-Za-z_]\w*\b/g },
];

export const javaRules: LangRules = [
  { type: "comment", regex: /\/\/.*|\/\*[\s\S]*?\*\//g },
  { type: "string", regex: /"(?:\\.|[^"\\])*"/g },
  {
    type: "keyword",
    regex:
      /\b(?:public|private|protected|class|interface|static|final|void|int|long|double|float|new|return|if|else|for|while|try|catch|finally|import|package|extends|implements|this|super)\b/g,
  },
  { type: "number", regex: /\b\d+(\.\d+)?\b/g },
  { type: "operator", regex: /[+\-*/=<>%|&!^~?:]+/g },
  { type: "identifier", regex: /\b[A-Za-z_]\w*\b/g },
];
