import * as React from 'react';

import 'twin.macro';
import { Link } from 'gatsby';

export function HeaderLink({ path, text }) {
  return (
    <Link
      to={path}
      tw="font-circular-bold text-px21 mb-6 hover:text-solar-100 active:text-solar-80"
    >
      {text}
    </Link>
  );
}

export default HeaderLink;
