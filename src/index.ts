type ValueOrArray<T> = T | ValueOrArray<T>[];
type ParsedResult = ValueOrArray<string>;

function parseBrackets(str: string, openBracket = "[", closeBracket = "]") {
  let idx = 0;

  return (function main(): ParsedResult {
    const arr = [];
    let startIdx = idx;

    function addWord() {
      if (idx - 1 > startIdx) {
        arr.push(str.slice(startIdx, idx - 1));
      }
    }

    while (idx <= str.length)
      switch (str[idx++]) {
        case openBracket: {
          arr.push(main());
          startIdx = idx;
          break;
        }
        case closeBracket: {
          addWord();
          return arr;
        }
      }

    addWord();

    return arr;
  })();
}

export default parseBrackets;
