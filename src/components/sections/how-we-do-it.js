import * as React from 'react';
import 'twin.macro';
import _ from 'lodash';
import Button from '../button';
import { StaticImage } from 'gatsby-plugin-image';

export function HowWeDoIt(props) {
  const caption = _.get(props, 'data.captions[0].text.text');
  const heading1 = _.get(props, 'data.headings[0].text.text');
  const heading2 = _.get(props, 'data.headings[1].text.text');
  const howWeDoItButtonLink = _.get(props, 'data.links[0]');

  return (
    <div tw="rounded px-4 py-16 lg:py-48 bg-default">
      <div tw="lg:w-9/12 mx-auto">
        <div tw="font-sf-regular mb-12 lg:mb-0">
          <div tw="text-px36 lg:text-px72 text-white leading-tight">
            Off-grid solar products
          </div>
          <div tw="font-sf-bold text-px36 lg:text-px72 lg:mb-32 text-primary leading-tight">
            have failed…
          </div>
        </div>
        <div tw="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-32">
          <div tw="order-last lg:order-first">
            <div tw="font-circular-regular text-px16 lg:text-px21 text-white mb-16">
              When it comes to solar products there has always been a tradeoff
              between appliance performance and long runtimes. Amped has
              breakthrough solar technology called SmartPerformance so you no
              longer have to choose. You now have a loud, bright appliances with
              long evening runtimes.
            </div>

            <Button text="HOW WE DO IT" path="/innovations" />
          </div>
          <div tw="grid grid-cols-2 gap-4 lg:gap-0 ">
            <div tw="lg:pr-4">
              <div tw="h-12 flex items-center mb-12">
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../../images/logo-wowsolar-white.png"
                />
              </div>
              <div>
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../../images/img-birght-screen.png"
                  layout="fullWidth"
                />
              </div>
              <div tw="mt-10 mb-5">
                <div tw="mr-4 inline-block">
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/ico-high-bright.png"
                  />
                </div>
                <div tw="inline-block">
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/ico-long-runtimes.png"
                  />
                </div>
              </div>
              <div tw="text-px14 lg:text-px18 text-secondary">
                Industry Leading Brightness with Long Runtimes
              </div>
            </div>
            <div tw="lg:pl-4">
              <div tw="text-px21 text-white h-12 flex items-center mb-12">
                Other Products
              </div>
              <div tw="bg-black">
                <div tw="opacity-50">
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/img-birght-screen.png"
                    layout="fullWidth"
                  />
                </div>
              </div>
              <div tw="mt-10 mb-5">
                <div tw="mr-4 inline-block">
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/ico-dim-screen.png"
                  />
                </div>
                <div tw="inline-block">
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../../images/ico-short-runtimes.png"
                  />
                </div>
              </div>
              <div tw="text-px14 lg:text-px18 text-secondary">
                Dim Screens with Short Runtimes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeDoIt;
