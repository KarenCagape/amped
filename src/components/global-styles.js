import * as React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

export const CustomStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${tw`font-sans`};
    color: ${tw`text-default`};
  }
`;

export function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyle />
    </>
  );
}

export default GlobalStyles;
