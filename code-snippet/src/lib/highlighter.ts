// mini-highlighter.ts
export type Rule = { type: string; regex: RegExp };
export type LangRules = Rule[];

/** Escape HTML for safe output */
export const escapeHtml = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

/** Tokenize without overlapping conflicts.
 *  rules must be ordered by priority (first = highest priority).
 */
export function highlightWithRules(code: string, rules: LangRules) {
  // collect matches
  const matches: {
    start: number;
    end: number;
    text: string;
    type: string;
    priority: number;
  }[] = [];

  for (let i = 0; i < rules.length; i++) {
    const r = rules[i];
    const re = new RegExp(
      r.regex.source,
      r.regex.flags.includes("g") ? r.regex.flags : r.regex.flags + "g"
    );
    let m: RegExpExecArray | null;
    while ((m = re.exec(code)) !== null) {
      matches.push({
        start: m.index,
        end: m.index + m[0].length,
        text: m[0],
        type: r.type,
        priority: i,
      });
      if (m[0].length === 0) break; // avoid infinite loop
    }
  }

  // sort by start, priority (lower index is higher priority), longer first to prefer big matches
  matches.sort(
    (a, b) =>
      a.start - b.start ||
      a.priority - b.priority ||
      b.end - b.start - (a.end - a.start)
  );

  // accept non-overlapping using greedy selection
  const accepted: typeof matches = [];
  for (const m of matches) {
    const overlaps = accepted.some(
      (a) => !(m.end <= a.start || m.start >= a.end)
    );
    if (!overlaps) accepted.push(m);
  }

  // build HTML
  accepted.sort((a, b) => a.start - b.start);
  let out = "";
  let pos = 0;
  for (const m of accepted) {
    if (pos < m.start) out += escapeHtml(code.slice(pos, m.start));
    out += `<span class="token ${m.type}">${escapeHtml(m.text)}</span>`;
    pos = m.end;
  }
  if (pos < code.length) out += escapeHtml(code.slice(pos));
  return out;
}
