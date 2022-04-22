import * as React from "react";
import tw from "twin.macro";

export function Link({ path, text }) {
  return (
    <a tw="text-base text-white font-book" href={path}>
      {text}
    </a>
  );
}

export default Link;
