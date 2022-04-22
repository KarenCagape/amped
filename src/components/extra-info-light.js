import * as React from 'react';
import 'twin.macro';
import Logo from '../assets/ico-logo.svg';

export function ExtraInfoLight({ caption }) {
  return (
    <div tw="border-2 border-gray-200 rounded-md">
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
      <div tw="text-px16 lg:text-px28 font-circular-book text-center items-center justify-center py-12 lg:py-24 lg:px-32 px-4">
        {caption}
      </div>
    </div>
  );
}

export default ExtraInfoLight;
