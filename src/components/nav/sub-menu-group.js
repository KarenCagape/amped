import * as React from 'react';
import 'twin.macro';

export function SubMenuGroup({ image, links, ...rest }) {
  return (
    <div tw="grid grid-cols-7 justify-between gap-8 " {...rest}>
      <div tw="col-span-2 pointer-events-none">{image}</div>
      <div tw="col-span-5 flex-none flex flex-col">{links}</div>
    </div>
  );
}

export default SubMenuGroup;
