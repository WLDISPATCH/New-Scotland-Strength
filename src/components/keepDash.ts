// Keeps an em dash on the same line as the word before it (via a non-breaking space),
// so a wrapped heading never starts a line with "—".
export function keepDash(text: string) {
  return text.replace(/ — /g, " — ");
}
