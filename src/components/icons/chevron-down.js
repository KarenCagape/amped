import * as React from 'react';
import 'twin.macro';

export default function ChevronDown({ ...rest }) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   tw="h-5 w-5"
    //   viewBox="0 0 20 20"
    //   fill="currentColor"
    //   {...rest}
    // >
    //   <path
    //     fillRule="evenodd"
    //     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //     clipRule="evenodd"
    //   />
    // </svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-6 w-6"
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   stroke="currentColor"
    //   {...rest}
    // >
    //   <path
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={2}
    //     d="M19 9l-7 7-7-7"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.404"
      height="8.117"
      viewBox="0 0 13.404 8.117"
    >
      <path
        id="ico-arrow-down-line"
        d="M-15174.541-3289.469l5.288,5.288,5.288-5.288"
        transform="translate(15175.955 3290.883)"
        fill="none"
        stroke="#b5c4ca"
        strokeLinecap="round"
        strokeWidth="2"
        {...rest}
      />
    </svg>
  );
}
