const CJK =
  String.raw`\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Bopomofo}` +
  String.raw`ー々〆〤、。「」『』（）〈〉《》【】〔〕・！？：；`;

const LINE_BREAK_BETWEEN_CJK = new RegExp(`([${CJK}])[ \\t]*[\\r\\n][ \\t]*(?=[${CJK}])`, 'gu');
const SPACE_BETWEEN_CJK = new RegExp(`([${CJK}])[ \\t]+(?=[${CJK}])`, 'gu');

/**
 * Removes the whitespace that YAML, markdown and JSX insert when they join a
 * wrapped line, but only between two CJK characters — 「iOS では」 keeps its space.
 */
export function foldCjk(text: string): string {
  return text.replace(LINE_BREAK_BETWEEN_CJK, '$1').replace(SPACE_BETWEEN_CJK, '$1');
}
