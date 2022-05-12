import * as React from 'react';
import 'twin.macro';

export function StoryCaption({ children, rest }) {
  return (
    <div tw="text-px28 lg:text-6xl !leading-tight" {...rest}>
      {children}
    </div>
  );
}

export default StoryCaption;
