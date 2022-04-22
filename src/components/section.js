import * as React from 'react';
import 'twin.macro';

export function Section({ bgColor, children, ...rest }) {
  return (
    <div tw="py-12 lg:py-48" css={[bgColor && { background: bgColor }]}>
      <div tw="w-9/12 mx-auto" {...rest}>
        {children}
      </div>
    </div>
  );
}

Section.Header = function Header({ children, ...rest }) {
  return (
    <div tw="mb-32 text-7xl" css={[{ color: '#1C212B' }]} {...rest}>
      {children}
    </div>
  );
};

Section.Content = function Content({ children, ...rest }) {
  return (
    <div
      tw="lg:items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-x-16"
      {...rest}
    >
      {children}
    </div>
  );
};

Section.Content.Title = function Title({ children, ...rest }) {
  return (
    <div tw="text-2xl lg:text-5xl mb-8" css={[{ color: '#1C212B' }]} {...rest}>
      {children}
    </div>
  );
};

Section.Content.Description = function Description({ children, ...rest }) {
  return (
    <div tw="text-xl mb-16" {...rest}>
      {children}
    </div>
  );
};

export default Section;
