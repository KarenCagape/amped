import * as React from 'react';
import 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/heroes/grid-backup';
import { SubHeader } from '../components/_/header';
import WowSolar from '../components/wowsolar';
import SvgCard from '../components/svg-card';

import ExtraInfoLight from '../components/extra-info-light';

import BecomeDistributor2 from '../components/sections/become-distributor2';
import Button from '../components/_/button';
import SVGFuel from '../assets/ico-fuel_generator.svg';
import SVGRun from '../assets/ico-runs_appliance.svg';
import SVGPayback from '../assets/ico-payback.svg';

export default function ProductGridBackup() {
  return (
    <Layout pageTitle="Grid Backup">
      <Banner />
      <div tw="pt-48">
        <div tw="w-9/12 m-auto grid grid-cols-5">
          <SubHeader tw="col-span-2 font-sf-light">Overview</SubHeader>
          <div tw="text-px21 col-span-3">
            <div></div>
            <div tw="mb-16">
              For weak-grid users, the Amped solar generator, Power Hub,
              delivers uninterrupted power. Our backup solar generator has three
              times the performance at one third the price and payback within a
              year. It’s the first premium solar solution to compete with the
              common fuel generator. We turn the weak-grid into a reliable grid.
            </div>
            <div tw="mb-16">
              The Power Hub has Smart Performance Inverter technology that
              supports AC and DC televisions, fans and music stereo systems,
              and, supports a wide range of compressor-based appliances like
              refrigeration, freezers and milling. The Power Hub can be charged
              by the sun or from the grid.
            </div>
            <div tw="grid grid-cols-3 gap-8">
              <SvgCard
                icon={<SVGFuel css={[{ width: 96 }]} />}
                content={<span tw="text-px18">Reliable Power Handling</span>}
              />
              <SvgCard
                icon={<SVGRun css={[{ width: 96 }]} />}
                content={<span tw="text-px18">Runs any appliance</span>}
              />
              <SvgCard
                icon={<SVGPayback css={[{ width: 96 }]} />}
                content={<span tw="text-px18">Payback in a Year</span>}
              />
            </div>
          </div>
        </div>
      </div>
      <div tw="pt-48">
        <div tw="w-9/12 m-auto grid grid-cols-5">
          <SubHeader tw="col-span-2 font-sf-light">Products</SubHeader>
          <div tw="text-px21 col-span-3">
            <div tw="bg-sitegray rounded grid grid-cols-2 gap-4 items-center py-8">
              <div>
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/product-powerhub.png"
                />
              </div>
              <div tw="p-8">
                <div tw="font-circular-bold mb-8">AMPED POWER HUB</div>
                <div tw="text-px18 mb-16">
                  Amped’s solar generator that delivers uninterrupted power that
                  pays back in a year
                </div>
                <div>
                  <Button tw="bg-secondary text-px16">COMING SOON</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="pt-48">
        <div tw="mx-auto w-9/12">
          <ExtraInfoLight
            caption={
              <div>
                The <WowSolar tw="text-px21" model="SOLAR GENERATOR" /> has
                multiple battery and solar panel sizes to perfectly match your
                business needs. No more fuel guzzling generators and loud noises
                needed to obtain continuous, reliable and clean energy for your
                business.
              </div>
            }
          />
        </div>
      </div>
      <div>
        <BecomeDistributor2 />
      </div>
    </Layout>
  );
}
