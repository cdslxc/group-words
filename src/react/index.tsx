import React from "react";
import { default as parse } from "../index";
import { ParsedResult } from "../types";

const recursiveRenderCompounds = (
  arr: ParsedResult,
  idx?: number
): React.ReactNode => {
  if (Array.isArray(arr)) {
    if (!idx && idx !== 0) return <>{arr.map(recursiveRenderCompounds)}</>;

    return (
      <React.Fragment key={idx}>
        <span style={{ display: "inline-block" }}>
          {arr.map(recursiveRenderCompounds)}
        </span>{" "}
      </React.Fragment>
    );
  }

  return arr + " ";
};

export const p = (str: string | null | undefined) =>
  str ? recursiveRenderCompounds(parse(str)) : "";

export default p;
