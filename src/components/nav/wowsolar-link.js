import * as React from 'react';

import 'twin.macro';
import { Link } from 'gatsby';

export function WowSolarLink({ path, number, ...rest }) {
  return (
    <Link
      to={path}
      tw="text-px16 mb-6 inline-block hover:text-solar-100 active:text-solar-80 font-circular-regular"
      {...rest}
    >
      <span tw="font-circular-bold">WOW</span>SOLAR&trade;
      <span tw="font-kallisto font-bold">{number}</span>
    </Link>
  );
}

export default WowSolarLink;
