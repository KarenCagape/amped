import * as React from 'react';
import 'twin.macro';
import _ from 'lodash';
import Button from '../button';

import AmpedStoryMap from '../amped-story-map';

function MetricCard({ value, label }) {
  return (
    <div tw="bg-sitegray px-8 py-2 rounded-md">
      <div tw="font-circular-bold ">{value}</div>
    </div>
  );
}

export function AmpedImpact(props) {
  return (
    <div tw="px-4 lg:px-0 py-20 lg:py-52 ">
      <div tw="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full lg:w-9/12 mx-auto">
        <div tw="lg:pr-16 text-center lg:text-left">
          <div tw="text-px24 lg:text-px54 mb-12 font-sf-regular">
            <div tw="my-8 leading-tight">The Amped Impact</div>
          </div>
          <div tw="text-px16 lg:text-px21 mb-8 font-circular-regular leading-normal">
            Many assume that people with weak or no grid connections will accept
            a lower quality experience for any type of energy access. We operate
            from a different assumption… everyone deserves a reliable solar
            experience with no compromises.
          </div>
          <div tw="w-full lg:w-1/2 mb-12">
            <MetricCard
              value={
                <div tw="text-px16 grid grid-cols-2 gap-4 items-center justify-between">
                  <div tw="text-px48 ">
                    <span tw="text-primary">300</span>
                    <sup tw="text-secondary">k</sup>
                  </div>
                  <div>Lives Impacted</div>
                </div>
              }
            />
          </div>
          <div>
            <Button text="AMPED STORY" tw="px-4 py-2" path="/experience-amped-story" />
          </div>
        </div>
        <div tw="lg:pl-16 order-first lg:order-last">
          <AmpedStoryMap />
        </div>
      </div>
    </div>
  );
}

export default AmpedImpact;
