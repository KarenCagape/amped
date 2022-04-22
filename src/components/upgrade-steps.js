import * as React from 'react';
import 'twin.macro';
import UpgradeCard from './upgrade-card';
import { StaticImage } from 'gatsby-plugin-image';
import SliderArrow from './btn-slider-arrow';
import get from '../helpers/get';

export function UpgradeSteps(props) {
  const data = get(props, 'data');

  return (
    <div tw="grid gap-8 lg:gap-16 lg:grid-cols-3 grid-cols-1 items-stretch">
      <div tw="relative">
        <div
          tw="z-10 flex justify-center items-center absolute w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
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
              src="../images/wowsolar60.png"
            />
          }
          title={get(data, '[0].headings[0].text.text')}
          caption={get(data, '[0].captions[0].text.text')}
        />
      </div>
      <div tw="relative">
        <div
          tw="z-10 flex justify-center items-center absolute w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
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
              src="../images/wowsolar60.png"
            />
          }
          title={get(data, '[1].headings[0].text.text')}
          caption={get(data, '[1].captions[0].text.text')}
        />
      </div>
      <div>
        <UpgradeCard
          image={
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/wowsolar60.png"
            />
          }
          title={get(data, '[2].headings[0].text.text')}
          caption={get(data, '[2].captions[0].text.text')}
        />
      </div>
    </div>
  );
}

export default UpgradeSteps;
