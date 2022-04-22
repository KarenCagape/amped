import * as React from 'react';
import 'twin.macro';

export function DataAndSpecSummary({ caption, actions, ...rest }) {
  return (
    <div tw="grid grid-cols-1 lg:grid-cols-2" {...rest}>
      <div>
        <div tw="text-px16 lg:text-px28 mb-12">{caption}</div>
        <div>{actions}</div>
      </div>
    </div>
  );
}
export default DataAndSpecSummary;
