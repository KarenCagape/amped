import * as React from 'react';
import 'twin.macro';
import _ from 'lodash';
import { StaticImage } from 'gatsby-plugin-image';

export function MeetTheSolutions(props) {
  const heading1 = _.get(props, 'data.headings[0].text.text');
  const heading2 = _.get(props, 'data.headings[1].text.text');
  const imageBlock1 = _.get(props, 'data.images[0]');
  const imageBlock2 = _.get(props, 'data.images[1]');

  return (
    <div tw="pt-12 lg:pt-48 pb-24">
      <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto">
        <div tw="mb-8 lg:mb-32">
          <div tw="font-sf-light text-px36 lg:text-px72">
            Meet the <span tw="font-sf-bold text-primary">solutions</span>
          </div>
        </div>
        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div>
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../../images/img-solar-appliances-new.png"
              layout="fullWidth"
            />
          </div>
          <div>
            <div tw="text-px24 lg:text-px54 mb-8 font-sf-regular">
              <div tw="my-4 leading-none">Solar</div>
              <div tw="my-4 leading-none">Appliances</div>
            </div>
            <div tw="text-lg lg:text-px21 font-circular-regular">
              Smart Performance delivers light, fan, TV and other appliances
              with city-like performance. Business owners can use the TV in open
              café playing football games that can be enjoyed even on a bright
              day. Families can share a TV program outdoors with friends and
              family. No need to only watch a solar TV in a dark room or just at
              night.
            </div>
          </div>
        </div>
        <div tw="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <div tw="font-sf-regular text-2xl lg:text-px54 mb-8">
              <div tw="my-4 leading-none">Solar</div>
              <div tw="my-4 leading-none">Generator</div>
            </div>
            <div tw="text-lg lg:text-px21 font-circular-regular">
              Smart Performance delivers uninterrupted power for weak-grid
              users. Smart Performance solar generator replaces the common fuel
              generator by turning the weak-grid into a reliable grid. Smart
              Performance solar generators deliver up to three times the
              performance, at one-third the price, for solutions that payback in
              a year.
            </div>
          </div>
          <div tw="order-first lg:order-last">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../../images/img-solar-generator-new.png"
              layout="fullWidth"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheSolutions;
