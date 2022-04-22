import * as React from 'react';
import 'twin.macro';

export function WowSolar({ model, ...rest }) {
  return (
    <span
      tw="inline-block text-px16 font-circular-regular text-default"
      {...rest}
    >
      <span tw="font-circular-bold">WOW</span>
      <span tw="font-circular-light">SOLAR&trade;</span>{' '}
      <span tw="font-kallisto font-bold">{model}</span>
    </span>
  );
}

export default WowSolar;
