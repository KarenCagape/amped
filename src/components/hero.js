import * as React from 'react';
import 'twin.macro';

export function Hero({ bgImage, bgColor, children, ...rest }) {
  return (
    <div tw="lg:flex lg:flex-col lg:justify-center lg:items-center h-screen">
      <div tw="min-h-full w-full flex lg:justify-center lg:items-center ">
        <div
          tw="pt-12 px-4 lg:px-0 lg:pt-12 text-center block lg:text-left lg:w-9/12 lg:flex lg:justify-between lg:items-center"
          {...rest}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Hero.Caption = function Caption({ children, ...rest }) {
  return (
    <div tw="sm:w-full lg:w-2/5 flex-none" {...rest}>
      {children}
    </div>
  );
};

Hero.Caption.Header = function Header({ children, ...rest }) {
  return (
    <div tw="mb-4 text-px36 lg:text-px72 font-circular-book" {...rest}>
      <span tw="leading-none">{children}</span>
    </div>
  );
};

Hero.Caption.Text = function Text({ children, ...rest }) {
  return (
    <div tw="text-px16 lg:text-px36 font-circular-book" {...rest}>
      <span tw="leading-normal">{children}</span>
    </div>
  );
};

export default Hero;
