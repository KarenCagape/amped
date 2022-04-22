import * as React from 'react';
import 'twin.macro';

export default function Plus({ ...rest }) {
  return (
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
    //     d="M12 4v16m8-8H4"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <g id="ico-plus" transform="translate(15549.5 12542.5)">
        <line
          id="Line_52"
          data-name="Line 52"
          y2="12"
          transform="translate(-15542.5 -12541.5)"
          fill="none"
          stroke="#b5c4ca"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          id="Line_53"
          data-name="Line 53"
          y1="12"
          transform="translate(-15536.5 -12535.5) rotate(90)"
          fill="none"
          stroke="#b5c4ca"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
