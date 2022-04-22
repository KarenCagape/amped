import * as React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';

export function Hero1() {
  return (
    <div>
      <div tw="relative">
        <StaticImage
          alt=""
          loading="eager"
          placeholder="none"
          src="../../images/banner-1-hero.png"
          layout="fullWidth"
        />
        <div tw="absolute z-10 top-0 left-0 min-h-full w-full flex justify-center items-center">
          <div tw="w-9/12">
            <div tw="w-2/5">
              <div tw="text-6xl">It’s time to</div>
              <div tw="mb-12 text-6xl font-bold" css={[{ color: '#FC4803' }]}>
                redefine what’s possible
              </div>
              <div tw="text-3xl">
                City-like performance with off-grid efficiency. Solar products
                without compromise.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
