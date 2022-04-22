import * as React from 'react';
import 'twin.macro';

export function StoryCaption({ children, rest }) {
  return (
    <div tw="text-2xl lg:text-6xl" {...rest}>
      {children}
    </div>
  );
}

export default StoryCaption;
