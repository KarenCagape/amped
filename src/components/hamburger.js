import * as React from 'react';
import tw from 'twin.macro';

export function Hamburger({ open, onClick }) {
  return (
    <div
      tw="w-8 h-8 cursor-pointer"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <div
        tw="h-full w-full flex-col justify-between"
        css={[{ padding: '6px 0' }, open && tw`hidden`, !open && tw`flex`]}
      >
        <div tw="h-1 bg-default rounded" />
        <div tw="h-1 bg-default rounded" />
        <div>
          <div tw="h-1 w-1/2 bg-default rounded" />
        </div>
      </div>
      <div
        tw="relative h-full w-full"
        css={[open && tw`block`, !open && tw`hidden`]}
      >
        <div
          tw="h-1 w-10/12 bg-default rounded absolute -translate-y-1/2 -translate-x-1/2 rotate-45"
          css={[
            {
              left: '50%',
              top: '50%',
            },
          ]}
        />
        <div
          tw="h-1 w-10/12 bg-default rounded absolute -translate-y-1/2 -translate-x-1/2 -rotate-45"
          css={[
            {
              left: '50%',
              top: '50%',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Hamburger;
