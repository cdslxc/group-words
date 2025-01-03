export function hasValidGrouping(s: string, openChar = "[", closeChar = "]") {
  const stack = [];

  for (const char of s) {
    if (char === openChar) {
      stack.push(char);
    } else if (char === closeChar) {
      if (stack.length === 0 || stack.pop() !== openChar) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
