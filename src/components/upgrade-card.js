import * as React from 'react';
import 'twin.macro';

export function UpgradeCard({ image, title, caption, ...rest }) {
  return (
    <div
      tw="h-full p-8 pb-20 lg:p-12 lg:pb-20 inline-block flex-none rounded bg-sitegray text-center lg:text-left"
      {...rest}
    >
      <div tw="mb-8 flex justify-center items-center">{image}</div>
      <div tw="font-circular-bold text-px18 lg:text-px28 mb-6 lg:mb-8">{title}</div>
      <div tw="text-px16 lg:text-px18 font-circular-regular">{caption}</div>
    </div>
  );
}

export default UpgradeCard;
