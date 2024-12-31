import { default as parse } from "../index";

export function parseBrackets(
  string: string,
  openBracket?: string,
  closeBracket?: string
) {
  return <span>{parse(string, openBracket, closeBracket)}</span>;
}
