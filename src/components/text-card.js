import * as React from 'react';
import 'twin.macro';

export function TextCard({ value, label, ...rest }) {
  return (
    <div tw="bg-white p-8 rounded" {...rest}>
      <div tw="text-px48 lg:text-[56px] 2xl:text-px72 font-circular-bold text-center lg:text-left">
        {value}
      </div>
      <div tw="text-px16 font-circular-bold text-center lg:text-left">
        {label}
      </div>
    </div>
  );
}

export default TextCard;
