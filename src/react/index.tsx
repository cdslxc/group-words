import type { ReactNode } from "react";

export function parseAndWrap(
  text: string,
  openBracket?: string,
  closeBracket?: string,
  key: number = 0
): (string | ReactNode)[] {
  const wrapWithSpan = (
    content: (string | ReactNode)[],
    key: number
  ): ReactNode => (
    <span key={key} style={{ display: "inline-block" }}>
      {content}
    </span>
  );

  const result: (string | ReactNode)[] = [];
  let buffer = "";
  let nestedLevel = 0;
  let nestedStart = -1;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === openBracket) {
      if (nestedLevel === 0) {
        if (buffer) {
          result.push(buffer);
          buffer = "";
        }
        nestedStart = i;
      }
      nestedLevel++;
    } else if (char === closeBracket) {
      nestedLevel--;
      if (nestedLevel === 0 && nestedStart !== -1) {
        const nestedContent = text.slice(nestedStart + 1, i);
        result.push(
          wrapWithSpan(
            parseAndWrap(nestedContent, openBracket, closeBracket, key + 1),
            key
          )
        );
        nestedStart = -1;
      }
    } else if (nestedLevel === 0) {
      buffer += char;
    }
  }

  if (buffer) {
    result.push(buffer);
  }

  return result;
}

export const ParseAndWrapComponent: React.FC<{
  text: string;
  brackets?: [string, string];
}> = ({ text, brackets }) => {
  const [openBracket, closeBracket] = brackets ?? [undefined, undefined];
  return parseAndWrap(text, openBracket, closeBracket);
};

export default ParseAndWrapComponent;

// export default function App() {
//   const text = "Hello (world [nested {example}])!";
//   return (
//     <div>
//       {/* Example Usage */}
//       <ParseAndWrapComponent text={text} openBracket="(" closeBracket=")" />
//       <ParseAndWrapComponent text={text} openBracket="[" closeBracket="]" />
//       <ParseAndWrapComponent text={text} openBracket="{" closeBracket="}" />
//     </div>
//   );
// }
