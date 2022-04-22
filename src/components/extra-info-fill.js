import * as React from 'react';
import 'twin.macro';
import Logo from '../assets/ico-logo.svg';

export function ExtraInfoFill({ caption }) {
  return (
    <div tw="border-2 border-sitegray bg-sitegray rounded-md">
      <div tw="flex items-center justify-center">
        <div
          css={[
            {
              marginTop: -47,
            },
          ]}
        >
          <Logo />
        </div>
      </div>
      <div tw="text-lg lg:text-px28 text-center items-center justify-center p-4 lg:py-24 lg:px-32">
        {caption}
      </div>
    </div>
  );
}

export default ExtraInfoFill;
