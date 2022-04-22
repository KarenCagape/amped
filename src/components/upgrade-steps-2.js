import * as React from 'react';
import 'twin.macro';
import UpgradeCard from './upgrade-card';
import { StaticImage } from 'gatsby-plugin-image';
import SliderArrow from './btn-slider-arrow';
import get from '../helpers/get';

export function UpgradeSteps2() {
  return (
    <div tw="grid gap-8 lg:gap-16 lg:grid-cols-3 grid-cols-1 items-stretch">
      <div tw="relative">
        <div
          tw="z-10 hidden lg:flex justify-center items-center absolute w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
          css={[
            {
              top: '50%',
              left: '108%',
            },
          ]}
        >
          <SliderArrow />
        </div>
        <UpgradeCard
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/slider-wowsolar-60-new.png"
            />
          }
          title={'Lighting System'}
          caption={
            'For customers that purchase a Lighting and Phone Charging system.'
          }
        />
      </div>
      <div tw="relative">
        <div
          tw="hidden lg:flex z-10 justify-center items-center absolute w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
          css={[
            {
              top: '50%',
              left: '108%',
            },
          ]}
        >
          <SliderArrow />
        </div>
        <UpgradeCard
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/slider-wowsolar100-new.png"
            />
          }
          title={'Upgrade Package'}
          caption={
            'Upgrading is easy. Simply purchase the necessary upgrade components and plug them in! No repurchasing any parts.'
          }
        />
      </div>
      <div>
        <UpgradeCard
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/slider-wowsolar-400-new.png"
            />
          }
          title={'Complete System'}
          caption={
            'The total cost of upgrading and ownerships is the lowest of any solar home system supplier in the market.'
          }
        />
      </div>
    </div>
  );
}

export default UpgradeSteps2;
