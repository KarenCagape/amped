import * as React from 'react';
import 'twin.macro';
import Layout from '../components/layout';
import Banner from '../components/heroes/amped-story';
import { LogoInnovation } from '../components/_/logo';
import { StaticImage } from 'gatsby-plugin-image';
import WowSolarPortraitLogo from '../assets/logo-wowsolar.svg';

export default function AmpedStory() {
  return (
    <Layout pageTitle="Amped Story">
      <Banner />
      <div tw="relative px-4 lg:px-0 lg:w-6/12 mx-auto py-16 lg:py-48">
        <div tw="mb-8 lg:mb-32">
          <LogoInnovation />
        </div>
        <div tw="text-lg lg:text-px21 text-default lg:mb-32 mb-16 mx-auto">
          <p tw="mb-8 lg:mb-16">
            We started Amped with the vision of delivering world class
            appliances to off-grid customers. Yes, there were already many solar
            products in the market, but they were disappointing … lots of
            off-the-shelf AC appliances dimmed to achieve good runtimes, and
            lots of junky products that lasted less than a year. Villagers told
            us that using solar was inferior compared to the experience of their
            wealthy cousins in the city. We set out to change solar’s
            reputation.
          </p>

          <p tw="mb-8 lg:mb-16">
            For battery-run products, the key to performance is energy
            efficiency. If you can make an appliance more efficient, you can
            increase its brightness and make it louder without losing runtime.
            And Iif you own the power electronics, you get tocan build in
            additional beneficial features that improve the solar experience - ,
            like long shelf life, , the ability to charge from both the wall or
            a from solar panel, and automated dimming of the appliances at the
            end of the night to extend runtimes. s by an hour.
          </p>
          <p tw="mb-8 lg:mb-16">
            Being engineering nerds, we spent countless hours tearing down
            appliances. We identified exactly which circuit components were
            drawing the most energy and designed our own energy efficient
            alternatives. We applied this approach to solar lamps, and then
            progressed to solar televisions, and are now tackling solar fridges.
            The result? We build products that perform so well that you want to
            brag to your neighbors about them.
          </p>
          <p tw="mb-8 lg:mb-16">
            We are now tackling a new market segment: the 1 billion people who
            suffer more than 4 hours of blackouts per day. Similar toLike the
            off-grid market, weak-grid customers traditionally don’t choose
            solar, but rather, dirty fossil fuel backup generators. Amped’s
            solar generator is the first viable clean alternative, which
            out-competes the fuel generator on both performance and price.
          </p>
          <p>At Amped, we are curious, creative, bold and on a mission to…</p>
        </div>
        <div tw="text-2xl lg:text-px54 text-default lg:mb-32 mb-16">
          <div tw="leading-tight">REDEFINE</div>
          <div tw="leading-tight text-primary font-bold">SOLAR</div>
        </div>
        <div tw="grid grid-cols-5 items-end" style={{marginTop: '-14.5em'}}>
          <div tw="grid grid-cols-2 col-span-4">
            <div tw="text-px21">
              <div tw="w-6/12 mb-12">
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/andi-signature.png"
                />
              </div>
              <div tw="flex justify-start items-center  gap-6 mb-8 lg:mb-0">
                <div
                  tw="rounded-full bg-sitegray"
                  css={[{ width: 90, height: 90 }]}
                >
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../images/team-andi.png"
                  />
                </div>
                <div>
                  <div>Andi Kleissner</div>
                  <div tw="text-px16 text-secondary">Co-CEO</div>
                </div>
              </div>
            </div>
            <div tw="text-px21">
              <div tw="w-6/12 mb-12">
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/kurt-signature.png"
                />
              </div>
              <div tw="flex justify-start gap-6 items-center">
                <div
                  tw="rounded-full bg-sitegray"
                  css={[{ width: 90, height: 90 }]}
                >
                  <StaticImage
                    alt=""
                    loading="eager"
                    placeholder="none"
                    src="../images/team-kurt.png"
                  />
                </div>
                <div>
                  <div>Kurt Kuhlmann</div>
                  <div tw="text-px16 text-secondary">Co-CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div tw="flex justify-end col-span-1">
            <WowSolarPortraitLogo />
          </div>
        </div>
      </div>
    </Layout>
  );
}
