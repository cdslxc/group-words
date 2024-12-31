import React from "react";
import { default as parse } from "../index";
import { ParsedResult } from "../types";

const render = (arr: ParsedResult, j?: number): React.ReactNode => {
  if (Array.isArray(arr)) {
    if (!j && j !== 0) return <>{arr.map(render)}</>;

    return (
      <React.Fragment key={j}>
        <span>{arr.map(render)}</span>{" "}
      </React.Fragment>
    );
  }

  return arr + " ";
};

const parseGroupWords = (str: string | null | undefined) =>
  str ? render(parse(str)) : "";

export default parseGroupWords;
