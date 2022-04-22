import * as React from 'react';
import 'twin.macro';

export function Copyright({ ...rest }) {
  return (
    <div tw="text-px16 text-white font-circular-regular" {...rest}>
      © 2021 by Amped Innovation.
    </div>
  );
}

export default Copyright;
